import React from "react";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";

function Profile({ user }) {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-xl mb-4 font-semibold">Welcome, {user.email}</h2>
      <button
        onClick={handleLogout}
        className="w-full bg-red-600 text-white py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
}

export default Profile;
