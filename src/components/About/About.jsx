import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ hideReadMore = false }) => {
  return (
    <section className="bg-white w-100" id="about">
      <div className="container py-5 px-4">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <div className="position-relative">
              {/* Background accent block for professional depth */}
              <div 
                className="position-absolute rounded-4" 
                style={{ top: '-20px', left: '-20px', right: '20px', bottom: '20px', backgroundColor: '#eef2f6', zIndex: 0 }}
              ></div>
              <img 
                src="https://content3.jdmagicbox.com/v2/comp/bilashipara/q2/9999p3667.3667.250220001757.a3q2/catalogue/quantum-public-school-bilasipara-circle-bilashipara-private-schools-60zu2ltqb1.jpg" 
                alt="About Quantum Public School" 
                className="img-fluid rounded-4 shadow-sm w-100 position-relative"
                style={{ objectFit: 'cover', height: '500px', zIndex: 1 }}
              />
              {/* Floating Badge */}
              <div className="position-absolute bg-white p-3 rounded-3 shadow-sm d-none d-md-block" style={{ bottom: '30px', right: '-20px', zIndex: 2, borderLeft: '4px solid #ffc300' }}>
                <h4 className="fw-bold text-dark mb-0">Estd. 2024</h4>
                <small className="text-secondary fw-medium">Pursuit of Excellence</small>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="col-lg-6 ps-lg-4">
            <span className="text-uppercase fw-bold mb-2 d-block" style={{ color: '#ffc300', letterSpacing: '1px', fontSize: '0.85rem' }}>
              Welcome to our campus
            </span>
            <h2 className="fw-bold mb-4 text-dark" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
              Nurturing <span style={{ color: '#001d3d' }}>Brilliant Minds</span> for a Better Tomorrow
            </h2>
            <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Quantum Public School is a premier private, co-educational integrated school located on J.P. Road in Bilasipara, Assam. Established in 2024, it functions under the ASSEB Division II (Darpan Code: 105677) and provides both English and Assamese medium instruction.
            </p>
            <p className="text-secondary mb-5" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              The institution is dedicated to holistic development alongside rigorous competitive exam preparation. Our modernized approach embeds essential life skills, ensuring every student is prepared to reach their full potential and thrive globally.
            </p>
            
            <div className="row g-4 mb-5">
              <div className="col-sm-6">
                <div className="d-flex align-items-center p-3 rounded-3 shadow-sm border border-light bg-light transition-transform hover-scale h-100">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '50px', height: '50px', backgroundColor: '#001d3d', color: '#ffc300' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.014.003-.054.014a12.598 12.598 0 0 1-.352.074A22.594 22.594 0 0 1 12 9c-1.53.074-2.733.284-3.524.585-.68.258-1.127.652-1.354 1.157L7 11V3l.122-.444c.227-.505.674-.899 1.354-1.157C9.267 1.098 10.47.888 12 .814c.828-.041 1.696-.067 2.585-.081l.055-.001.013-.001a.5.5 0 0 1 .125 0Zm-8.49.882c-.88.3-2.083.51-3.614.584C1.845 1.592 1 1.624 1 1.624v8.324s.845-.032 1.674-.073c1.53-.074 2.734-.284 3.614-.584C7.168 8.989 7.6 8.583 7.82 8.07l.18-.47V3.53l-.18-.47c-.22-.513-.652-.92-1.532-1.296ZM1.5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .23.425l.17.106c.036.022.081.048.134.077.105.059.252.133.435.215.367.165.856.346 1.45.503.953.251 2.22.463 3.693.634l.092.01c.214.025.432.046.654.065V15a.5.5 0 0 0 1 0v-3.486c.222-.019.44-.04.654-.065l.092-.01c1.473-.171 2.74-.383 3.693-.634.594-.157 1.083-.338 1.45-.503.183-.082.33-.156.435-.215.053-.029.098-.055.134-.077l.17-.106A.5.5 0 0 0 15 10V1a.5.5 0 0 0-.5-.5h-13Z"/></svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Modern Curriculum</h6>
                    <small className="text-secondary">Holistic development</small>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center p-3 rounded-3 shadow-sm border border-light bg-light transition-transform hover-scale h-100">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '50px', height: '50px', backgroundColor: '#ffc300', color: '#001d3d' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Expert Faculty</h6>
                    <small className="text-secondary">Qualified educators</small>
                  </div>
                </div>
              </div>
            </div>

            {!hideReadMore && (
              <Link to="/about" className="text-decoration-none fw-bold text-uppercase d-inline-flex align-items-center mt-2 hover-opacity" style={{ color: '#001d3d', fontSize: '0.85rem', letterSpacing: '1px', transition: 'opacity 0.2s' }}>
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
