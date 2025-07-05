"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";



export default function Home() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Persist user in localStorage
  useEffect(() => {
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('agrex_user') : null;
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('agrex_user', currentUser);
    } else {
      localStorage.removeItem('agrex_user');
    }
  }, [currentUser]);

  useEffect(() => {
    // Vanta effect removed; no background JS effect
  }, []);

  async function handleAuth(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`/api/${isSignup ? "signup" : "login"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        if (isSignup) {
          setIsSignup(false);
          setError("Signup successful, please login");
          setPassword("");
          setConfirmPassword("");
        } else {
          setCurrentUser(username);
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setError("");
        }
      } else {
        setError(data.error || "Unknown error");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden z-0" style={{
      backgroundImage: 'url("/bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Navbar */}
      <nav
        className="bg-green-600 h-16 flex items-center justify-between px-8 fixed top-0 left-0 w-full z-20 shadow-md"
      >
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <span className="text-white font-bold text-2xl ml-2">AgRex</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/explore" className="text-white hover:text-gray-200">Explore</a>
          <a href="/shop" className="text-white hover:text-gray-200">AgRex Shop</a>
          <a href="/about" className="text-white hover:text-gray-200">About Us</a>
        </div>
        {currentUser && (
          <div className="text-white font-semibold text-lg ml-4">👤 {currentUser}</div>
        )}
      </nav>

      {/* Login/Signup Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-80 flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                {isSignup ? "Sign Up" : "Login"}
              </h2>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              {isSignup && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
              )}
              <button
                className="w-full bg-green-600 text-white py-2 rounded-md mb-2"
              >
                {isSignup ? "Sign Up" : "Login"}
              </button>
              <button
                className="w-full bg-gray-300 text-gray-700 py-2 rounded-md mb-2"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <div className="w-full text-center mt-2">
                {isSignup ? (
                  <span>
                    Already have an account?{' '}
                    <button
                      className="text-blue-600 underline"
                      onClick={() => setIsSignup(false)}
                    >
                      Login
                    </button>
                  </span>
                ) : (
                  <span>
                    Don't have an account?{' '}
                    <button
                      className="text-blue-600 underline"
                      onClick={() => setIsSignup(true)}
                    >
                      Sign Up
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {/* Centered Content */}
      <section id="home" className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 z-0 pt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Agriculture & Farming Revolution With immersive AI Technology
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-white drop-shadow-md">
          A Complete Package For Farmers & Agriculture Enthusiasts
        </p>
        {/* Login/Signup Form Always Visible */}
        <div className="mt-12 flex justify-center w-full">
          <div className="bg-white/40 border-2 border-green-200 rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center backdrop-blur-md">
            {currentUser ? (
              <div className="w-full flex flex-col items-center">
                <h2 className="text-2xl font-bold text-green-900 mb-6 drop-shadow text-center tracking-tight">Here's what next</h2>
                <div className="flex flex-col gap-4 w-full">
                  <a href="/" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold shadow-lg text-lg transition text-center">Home</a>
                  <a href="/explore" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg text-lg transition text-center">Explore</a>
                  <a href="/shop" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-bold shadow-lg text-lg transition text-center">Shop</a>
                  <a href="/about" className="w-full bg-gray-700 hover:bg-gray-900 text-white py-3 rounded-lg font-bold shadow-lg text-lg transition text-center">About Us</a>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold mt-8" onClick={() => setCurrentUser(null)}>Logout</button>
              </div>
            ) : (
              <form className="w-full flex flex-col items-center" onSubmit={handleAuth}>
                <h2 className="text-3xl font-bold text-green-900 mb-6 drop-shadow text-center tracking-tight">
                  {isSignup ? "Sign Up" : "Login"}
                </h2>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full p-3 mb-4 border-2 border-green-100 rounded-lg bg-white/70 focus:ring-2 focus:ring-green-400 text-green-900 font-medium placeholder:text-green-400"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full p-3 mb-4 border-2 border-green-100 rounded-lg bg-white/70 focus:ring-2 focus:ring-green-400 text-green-900 font-medium placeholder:text-green-400"
                  required
                />
                {isSignup && (
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="w-full p-3 mb-4 border-2 border-green-100 rounded-lg bg-white/70 focus:ring-2 focus:ring-green-400 text-green-900 font-medium placeholder:text-green-400"
                    required
                  />
                )}
                {error && <div className="text-red-600 mb-2 w-full text-center">{error}</div>}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-400 hover:from-green-600 hover:to-blue-500 text-white py-3 rounded-lg font-bold shadow-lg transition mb-2 text-lg disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? (isSignup ? "Signing Up..." : "Logging In...") : (isSignup ? "Sign Up" : "Login")}
                </button>
                <div className="w-full text-center mt-2">
                  {isSignup ? (
                    <span className="text-green-900/80">
                      Already have an account?{' '}
                      <button
                        className="text-blue-600 underline font-semibold hover:text-blue-800"
                        type="button"
                        onClick={() => setIsSignup(false)}
                      >
                        Login
                      </button>
                    </span>
                  ) : (
                    <span className="text-green-900/80">
                      Don't have an account?{' '}
                      <button
                        className="text-blue-600 underline font-semibold hover:text-blue-800"
                        type="button"
                        onClick={() => setIsSignup(true)}
                      >
                        Sign Up
                      </button>
                    </span>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
