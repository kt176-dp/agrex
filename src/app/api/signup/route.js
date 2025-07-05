import { MongoClient } from 'mongodb';

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return new Response(JSON.stringify({ error: 'Missing username or password' }), { status: 400 });
    }
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();
    const users = db.collection('users');
    const existing = await users.findOne({ username });
    if (existing) {
      client.close();
      return new Response(JSON.stringify({ error: 'User already exists' }), { status: 409 });
    }
    await users.insertOne({ username, password });
    client.close();
    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
} 