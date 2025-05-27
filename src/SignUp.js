import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

function SignUp({ onAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onAuth();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="auth-container">
      <h2 className="text-xl mb-4 font-semibold">Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
