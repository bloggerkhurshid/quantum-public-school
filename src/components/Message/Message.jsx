import React from 'react';

const Message = () => {
  return (
    <section className="py-5 bg-white w-100" id="message">
      <div className="container py-5 px-4">
        <div className="row align-items-center">
          
          {/* Content Column */}
          <div className="col-lg-8 pe-lg-5 mb-5 mb-lg-0">
            <span className="text-uppercase fw-bold mb-2 d-block" style={{ color: '#ffc300', letterSpacing: '1px', fontSize: '0.85rem' }}>
              From the Principal
            </span>
            <h2 className="fw-bold mb-4 text-dark" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
              A Message of <span style={{ color: '#001d3d' }}>Encouragement</span>
            </h2>
            
            <div className="position-relative mb-4 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#001d3d" className="position-absolute" style={{ top: '-15px', left: '-15px', zIndex: 0, opacity: 0.08 }} viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
              </svg>
              <p className="text-secondary position-relative fst-italic" style={{ fontSize: '1.1rem', lineHeight: '1.8', zIndex: 1, paddingLeft: '15px' }}>
                "Education is not just about academic excellence; it is about character building and empowering our youth to face the challenges of tomorrow. At Quantum Public School, we strive to ignite curiosity and foster a lifelong love for learning in every student who walks through our doors."
              </p>
            </div>
            
            <div className="d-flex align-items-center mt-5">
              <div className="me-3 rounded" style={{ width: '4px', height: '60px', backgroundColor: '#ffc300' }}></div>
              <div>
                <h5 className="fw-bold text-dark mb-1">— Abdul Bari</h5>
                <span className="text-secondary d-block" style={{ fontSize: '0.9rem' }}>Principal, Quantum Public School</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-4 ps-lg-5 text-center mt-4 mt-lg-0">
            <div className="position-relative d-inline-block w-100" style={{ maxWidth: '350px' }}>
              {/* Background accent block matching the About section */}
              <div 
                className="position-absolute rounded-4" 
                style={{ top: '-15px', right: '-15px', left: '15px', bottom: '15px', backgroundColor: '#eef2f6', zIndex: 0 }}
              ></div>
              <div className="position-relative w-100" style={{ height: '350px', zIndex: 1 }}>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhyQDIe1RsfUWmamxsfZESgT4J58OcMOtR7ru_qJ_7cLgL42995lezjU&s=10" 
                  alt="Principal" 
                  className="w-100 h-100 rounded-4 shadow-sm"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                <div className="position-absolute bg-white px-4 py-2 rounded-pill shadow-sm" style={{ bottom: '-15px', left: '50%', transform: 'translateX(-50%)' }}>
                  <h6 className="fw-bold mb-0 text-dark text-nowrap" style={{ fontSize: '0.9rem' }}>Principal's Desk</h6>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Message;
