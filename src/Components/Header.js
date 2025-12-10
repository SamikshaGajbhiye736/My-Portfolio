import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../css/header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  // 👇 added this
  const isAdmin = window.location.pathname.includes("admin");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        className={`header-nav ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <motion.div whileHover={{ scale: 1.08 }}>
            <Navbar.Brand className="brand-name">Samiksha</Navbar.Brand>
          </motion.div>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto gap-4 text-center">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={item}
                  className="nav-animation"
                >
                  {/* 👇 only this line changed */}
                  <Nav.Link href={`${isAdmin ? "/#" : "#"}${item.toLowerCase()}`}>
                    {item}
                  </Nav.Link>
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Nav.Link href="/admin">
                  <span className="btn text-light fw-semibold px-3 py-1 rounded-pill">
                    Admin Panel
                  </span>
                </Nav.Link>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
}

export default Header;
