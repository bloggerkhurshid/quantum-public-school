import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdmissionPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds on first load
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenAdmissionPopup2');
      if (!hasSeenPopup) {
        setShow(true);
        sessionStorage.setItem('hasSeenAdmissionPopup2', 'true');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1050, backdropFilter: 'blur(3px)' }}>
      <div className="bg-white rounded-4 shadow-lg overflow-hidden position-relative text-center" style={{ maxWidth: '400px', width: '90%', animation: 'zoomIn 0.3s ease-out' }}>
        
        {/* CSS for simple animation */}
        <style>{`
          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>

        {/* Close Button */}
        <button 
          onClick={() => setShow(false)} 
          className="btn btn-sm btn-light position-absolute rounded-circle shadow-sm d-flex align-items-center justify-content-center"
          style={{ top: '15px', right: '15px', zIndex: 2, width: '30px', height: '30px', backgroundColor: 'rgba(255,255,255,0.9)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
        </button>

        {/* Banner Content */}
        <div className="p-5" style={{ background: 'linear-gradient(135deg, #001d3d 0%, #0a3a60 100%)', color: 'white' }}>
          <div className="mb-3 d-flex justify-content-center">
            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#001d3d" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
              </svg>
            </div>
          </div>
          <h2 className="fw-bold mb-2">Admissions Open</h2>
          <h5 className="fw-medium opacity-75 mb-4">For Session 2024 - 2025</h5>
          <p className="small opacity-75 mb-4 px-2">Join Quantum Public School and step into a world of excellence and innovation.</p>
          
          <button type="button" data-bs-toggle="modal" data-bs-target="#queryFormModal" onClick={() => setShow(false)} className="btn rounded-pill px-4 py-2 fw-bold text-uppercase border-0 shadow-sm" style={{ backgroundColor: '#ffc300', color: '#001d3d', letterSpacing: '1px', fontSize: '0.9rem' }}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup;
