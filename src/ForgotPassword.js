import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMsg("Password reset email sent!");
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleReset} className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-xl mb-4 font-semibold">Reset Password</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded">
        Send Reset Email
      </button>
      {msg && <p className="text-sm mt-3">{msg}</p>}
    </form>
  );
}

export default ForgotPassword;
