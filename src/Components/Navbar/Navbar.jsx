import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBriefcase, FaFile, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollThreshold = 200;

      setBackgroundColor(scrollY > scrollThreshold ? '#1e3d59' : 'transparent');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor }}>
      <ul className="nav-list">
        <NavItem href="#home" icon={<FaHome />} label="Home" />
        <NavItem href="#about" icon={<FaUser />} label="About" />
        <NavItem href="#portfolio" icon={<FaBriefcase />} label="Portfolio" />
        <NavItem href="#resume" icon={<FaFile />} label="Resume" />
        <NavItem href="#contact" icon={<FaEnvelope />} label="Contact" />
      </ul>
    </nav>
  );
}

function NavItem({ href, icon, label }) {
  return (
    <li className="nav-item">
      <a href={href}>
        {icon}
        {label}
      </a>
    </li>
  );
}

export default Navbar;
