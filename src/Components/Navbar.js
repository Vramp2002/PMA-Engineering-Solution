import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import pma from "../Images/PMA.jpeg"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  /* =========================
     📌 Scroll Spy
     ========================= */
  useEffect(() => {
    const sections = document.querySelectorAll("section, footer");
    const navLinks = document.querySelectorAll(".nav-links a");

    function activateScrollSpy() {
      let scrollPos = window.scrollY + 120;

      sections.forEach((sec) => {
        if (!sec.id) return;

        if (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          navLinks.forEach((a) => a.classList.remove("active-link"));

          const target = document.querySelector(
            `.nav-links a[href$="#${sec.id}"]`
          );
          if (target) target.classList.add("active-link");
        }
      });
    }

    window.addEventListener("scroll", activateScrollSpy);
    return () => window.removeEventListener("scroll", activateScrollSpy);
  }, []);

  /* =========================
     📱 Close menu on outside click
     ========================= */
  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        mobileOpen &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [mobileOpen]);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-inner">
        {/* LOGO */}
        <div className="brand">
          <div className="brand-logo">
            <img src={pma} alt="Eleven11 Logo" />
          </div>
          <div className="brand-name">PMA Engineering Solution</div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
        >
          ☰
        </button>

        {/* LINKS */}
        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li>
            <Link to="/#home" onClick={() => setMobileOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/#value-prop" onClick={() => setMobileOpen(false)}>Why Us</Link>
          </li>
          <li>
            <Link to="/#features" onClick={() => setMobileOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/#industries" onClick={() => setMobileOpen(false)}>Made By Us</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMobileOpen(false)}>Products & Solutions</Link>
          </li>
          <li>
            <Link to="/#footer" onClick={() => setMobileOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
