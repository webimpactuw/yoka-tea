import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

import Navbar from "./NavBar";
import Menu from "./Menu";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Profile from "./Profile";
import Gallery from "./Gallery";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import './YokaTeaApp.css';

function YokaTeaApp() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected route */}
            <Route
              path="/profile"
              element={user ? <Profile user={user} /> : <Navigate to="/signin" replace />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default YokaTeaApp;
