import React from "react";
import Navbar from "./NavBar";
import Menu from "./Menu";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Profile from "./Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function YokaTeaApp() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default YokaTeaApp;
