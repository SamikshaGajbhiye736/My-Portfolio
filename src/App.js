import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import AdminPanel from "./Components/AdminPanel";
import AdminLogin from "./Components/Login";
import AdminRegister from "./Components/Register";
import Skills from "./Components/Skills";
import EditSkills from './Components/EditSkills';
import Projects from './Components/Projects';
import Conatct from './Components/Contact';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("adminLoggedIn");
    if (status === "true") setLoggedIn(true);
  }, []);



 useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, null, " "); //remove hash
      }, 200);
    }
  }
}, []);


  return (
    <BrowserRouter>
      {/* Header only for public pages */}
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <About />
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
          </>
        } />

        {/* Admin Auth pages — no header */}
        <Route path="/admin-login" element={<AdminLogin onLogin={() => setLoggedIn(true)} />} />
        <Route path="/admin-register" element={<AdminRegister />} />

        {/* Admin Panel */}
        <Route path="/admin" element={loggedIn ? <AdminPanel /> : <Navigate to="/admin-login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
