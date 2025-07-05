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
    const user = await users.findOne({ username, password });
    client.close();
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid credentials, sign up first' }), { status: 401 });
    }
    return new Response(JSON.stringify({ success: true, username }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
} 