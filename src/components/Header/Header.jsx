import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/qps-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-2 pb-2 shadow-sm w-100 sticky-top z-3">
      <div className="container px-3">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Quantum Public School" width="55" height="55" className="me-3 rounded-circle" />
          <div className="d-flex flex-column">
            <span className="fw-bold text-dark text-uppercase school-name">
              Quantum Public School
            </span>
            <span className="text-secondary mt-1 fw-medium school-address">
              J.P Road Bilasipara, Dhubri (Assam) 783348
            </span>
          </div>
        </Link>
        <button className="navbar-toggler border-0" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon" style={{ transform: 'scale(0.85)' }}></span>
        </button>
        <div className={`offcanvas-lg offcanvas-end mobile-offcanvas ${isOpen ? 'show' : ''}`} style={{ visibility: isOpen ? 'visible' : '' }} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title fw-bold text-dark" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" onClick={closeMenu} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" style={{ fontSize: '0.95rem' }}>
              <li className="nav-item mx-2 mb-2 mb-lg-0">
                <NavLink onClick={closeMenu} className={({ isActive }) => `nav-link text-uppercase fw-bold ${isActive ? 'active' : 'text-secondary'}`} to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-2 mb-2 mb-lg-0">
                <NavLink onClick={closeMenu} className={({ isActive }) => `nav-link text-uppercase fw-bold ${isActive ? 'active' : 'text-secondary'}`} to="/about">About Us</NavLink>
              </li>
              <li className="nav-item mx-2 mb-2 mb-lg-0">
                <NavLink onClick={closeMenu} className={({ isActive }) => `nav-link text-uppercase fw-bold ${isActive ? 'active' : 'text-secondary'}`} to="/academics">Academics</NavLink>
              </li>
              <li className="nav-item mx-2 mb-2 mb-lg-0">
                <NavLink onClick={closeMenu} className={({ isActive }) => `nav-link text-uppercase fw-bold ${isActive ? 'active' : 'text-secondary'}`} to="/gallery">Gallery</NavLink>
              </li>
              <li className="nav-item mx-2 mb-2 mb-lg-0">
                <NavLink onClick={closeMenu} className={({ isActive }) => `nav-link text-uppercase fw-bold ${isActive ? 'active' : 'text-secondary'}`} to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <button type="button" data-bs-toggle="modal" data-bs-target="#queryFormModal" className="btn rounded-pill px-4 py-2 mt-4 fw-bold text-uppercase shadow-sm w-100 d-lg-none" style={{ backgroundColor: '#ffc300', color: '#001d3d', border: 'none', fontSize: '0.85rem', letterSpacing: '1px' }}>
              Apply Now
            </button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#queryFormModal" className="btn rounded-pill px-4 py-2 ms-lg-3 mt-3 mt-lg-0 fw-bold text-uppercase shadow-sm d-none d-lg-block" style={{ backgroundColor: '#ffc300', color: '#001d3d', border: 'none', fontSize: '0.85rem', letterSpacing: '1px' }}>
              Apply Now
            </button>
          </div>
        </div>
        {isOpen && <div className="offcanvas-backdrop fade show d-lg-none" onClick={closeMenu} style={{ zIndex: 1040 }}></div>}
      </div>
    </nav>
  );
};

export default Header;
