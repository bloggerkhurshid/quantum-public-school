import React from 'react';
import DocumentMeta from '../../components/DocumentMeta/DocumentMeta';
import About from '../../components/About/About';

const AboutPage = () => {
  return (
    <div>
      <DocumentMeta 
        title="About Us" 
        description="Learn more about the vision, mission, and core values of Quantum Public School." 
      />
      <div className="py-4 mt-4 mb-4 border-bottom">
        <div className="container">
          <h2 className="fw-bold text-dark mb-2">About <span style={{ color: '#ffc300' }}>Us</span></h2>
          <p className="mb-0 text-secondary" style={{ maxWidth: '700px', fontSize: '0.95rem' }}>
            Discover the vision, mission, and core values that drive Quantum Public School to empower the leaders of tomorrow.
          </p>
        </div>
      </div>
      <About hideReadMore={true} />
      
      {/* Vision & Mission Section */}
      <section className="py-5" style={{ backgroundColor: '#eef2f6' }}>
        <div className="container py-4 px-4">
          <div className="row g-5 align-items-center">
            
            <div className="col-lg-6">
              <div className="p-5 rounded-4 shadow-lg position-relative overflow-hidden h-100" style={{ backgroundColor: '#001d3d', color: '#fff' }}>
                <div className="position-absolute" style={{ top: '-10%', right: '-5%', opacity: '0.05', transform: 'scale(2)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>
                </div>
                <div className="position-relative z-1">
                  <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4 shadow-sm" style={{ width: '60px', height: '60px', color: '#001d3d' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
                  </div>
                  <h3 className="fw-bold mb-3" style={{ color: '#ffc300' }}>Our Vision</h3>
                  <p className="text-light opacity-75 mb-0" style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>
                    To be a premier educational institution that fosters holistic development, critical thinking, and a lifelong passion for learning, creating responsible global citizens who contribute positively to society.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-5 rounded-4 shadow-lg position-relative overflow-hidden h-100" style={{ backgroundColor: '#ffc300', color: '#001d3d' }}>
                <div className="position-absolute" style={{ top: '-10%', right: '-5%', opacity: '0.1', transform: 'scale(2)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0l2.5 5.5L16 6l-4 4.5L13 16l-5-3-5 3 1-5.5L0 6l5.5-.5L8 0z"/></svg>
                </div>
                <div className="position-relative z-1">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4 shadow-sm" style={{ width: '60px', height: '60px', backgroundColor: '#001d3d', color: '#ffc300' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/></svg>
                  </div>
                  <h3 className="fw-bold mb-3" style={{ color: '#001d3d' }}>Our Mission</h3>
                  <p className="mb-0 fw-medium" style={{ lineHeight: '1.9', fontSize: '1.05rem', color: 'rgba(0,29,61,0.85)' }}>
                    We are committed to providing a safe, nurturing, and innovative environment where students can explore their potential, embrace diversity, and build the character needed to thrive in a rapidly changing world.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
