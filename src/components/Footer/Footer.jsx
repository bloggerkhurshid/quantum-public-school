import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/qps-logo.png';

const Footer = () => {
  return (
    <footer className="w-100" style={{ backgroundColor: '#001d3d', color: '#cdd8e3' }}>

      {/* Golden top accent bar */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #ffc300, #e6a800)' }} />

      {/* Main content */}
      <div className="container px-4 pt-5 pb-4">
        <div className="row g-5">

          {/* Col 1: Branding */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img src={logo} alt="QPS Logo" width="52" height="52" className="rounded-circle" style={{ border: '2px solid #ffc300' }} />
              <div>
                <div className="fw-bold text-white" style={{ fontSize: '1.05rem', lineHeight: 1.2 }}>Quantum Public School</div>
                <div style={{ fontSize: '0.75rem', color: '#ffc300', letterSpacing: '1px', textTransform: 'uppercase' }}>Bilasipara, Assam</div>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.55)', marginTop: '1rem' }}>
              Empowering students with quality education, discipline, and values for a brighter tomorrow. Affiliated with CBSE Board.
            </p>
            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">
              {[
                {
                  label: 'Facebook',
                  href: '#',
                  icon: <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                },
                {
                  label: 'Instagram',
                  href: '#',
                  icon: <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                },
                {
                  label: 'YouTube',
                  href: '#',
                  icon: <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseOver={e => { e.currentTarget.style.backgroundColor = '#ffc300'; e.currentTarget.style.color = '#001d3d'; }}
                  onMouseOut={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="fw-bold text-white mb-4" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #ffc300', paddingBottom: '8px', display: 'inline-block' }}>
              Quick Links
            </h6>
            <ul className="list-unstyled m-0 p-0">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/academics', label: 'Academics' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/faculties', label: 'Faculties' },
                { to: '/notifications', label: 'Notifications' },
              ].map(({ to, label }) => (
                <li key={to} className="mb-2">
                  <Link
                    to={to}
                    className="text-decoration-none d-flex align-items-center gap-2"
                    style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', transition: 'all 0.2s' }}
                    onMouseOver={e => { e.currentTarget.style.color = '#ffc300'; e.currentTarget.style.paddingLeft = '6px'; }}
                    onMouseOut={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <span style={{ color: '#ffc300', fontSize: '0.6rem' }}>▶</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Important Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-white mb-4" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #ffc300', paddingBottom: '8px', display: 'inline-block' }}>
              Important Links
            </h6>
            <ul className="list-unstyled m-0 p-0">
              {[
                { label: 'Samarth Portal', href: 'https://samarth.edu.in' },
                { label: 'NAAC', href: 'https://naac.gov.in' },
                { label: 'Gauhati University', href: 'https://gauhati.ac.in' },
                { label: 'DARPAN Portal', href: 'https://darpan.gov.in' },
                { label: 'DIKSHA Portal', href: 'https://diksha.gov.in' },
                { label: 'AHSEC', href: 'https://ahsec.assam.gov.in' },
              ].map(({ label, href }) => (
                <li key={label} className="mb-2">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none d-flex align-items-center gap-2"
                    style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', transition: 'all 0.2s' }}
                    onMouseOver={e => { e.currentTarget.style.color = '#ffc300'; e.currentTarget.style.paddingLeft = '6px'; }}
                    onMouseOut={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-white mb-4" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #ffc300', paddingBottom: '8px', display: 'inline-block' }}>
              Contact Us
            </h6>
            <ul className="list-unstyled m-0 p-0">
              <li className="mb-3 d-flex gap-3" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.6' }}>
                <span style={{ color: '#ffc300', marginTop: '2px', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                </span>
                Ward No 11, J.P. Road, Near Style Bazaar, Bilasipara, Dhubri (Assam) 783348
              </li>
              <li className="mb-3 d-flex gap-3" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
                <span style={{ color: '#ffc300', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                </span>
                +91 69009 12323 / +91 86387 39867
              </li>
              <li className="d-flex gap-3" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
                <span style={{ color: '#ffc300', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                </span>
                quantumpublicschool24@gmail.com
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <div className="container px-4 py-3 text-center">
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Quantum Public School. All rights reserved.
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
