import React, { useState } from 'react';
import DocumentMeta from '../../components/DocumentMeta/DocumentMeta';

const ContactPage = () => {
  const [queryType, setQueryType] = useState('');
  return (
    <div>
      <DocumentMeta 
        title="Contact Us" 
        description="Get in touch with Quantum Public School for admissions, inquiries, or more information." 
      />
      <div className="py-4 mt-4 mb-4 border-bottom">
        <div className="container">
          <h2 className="fw-bold text-dark mb-2">Contact <span style={{ color: '#ffc300' }}>Us</span></h2>
          <p className="mb-0 text-secondary" style={{ maxWidth: '700px', fontSize: '0.95rem' }}>
            Get in touch with us for admissions, queries, or to learn more about our integrated curriculum.
          </p>
        </div>
      </div>

      <div className="container px-3 pb-5">
        <div className="row g-4">
          {/* Left Column: Form */}
          <div className="col-lg-7">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100 border-top border-4 d-flex flex-column" style={{ borderTopColor: '#001d3d', borderTopStyle: 'solid' }}>
              <h5 className="fw-bold mb-3 text-dark">Send us a Query</h5>
              <form className="d-flex flex-column flex-grow-1">
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-light border-0 rounded-3" id="floatingName" placeholder="Your Name" required />
                      <label htmlFor="floatingName" className="text-muted">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control bg-light border-0 rounded-3" id="floatingEmail" placeholder="Email Address" required />
                      <label htmlFor="floatingEmail" className="text-muted">Email Address</label>
                    </div>
                  </div>
                </div>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="tel" className="form-control bg-light border-0 rounded-3" id="floatingPhone" placeholder="Phone Number" required />
                      <label htmlFor="floatingPhone" className="text-muted">Phone Number</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                    <select 
                      className="form-select bg-light border-0 rounded-3" 
                      id="floatingSelect" 
                      required 
                      value={queryType}
                      onChange={(e) => setQueryType(e.target.value)}
                    >
                      <option value="" disabled>Select Query Type</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="scholarship">Scholarships</option>
                      <option value="callback">Request a Callback</option>
                      <option value="other">Other Information</option>
                    </select>
                    <label htmlFor="floatingSelect" className="text-muted">What are you looking for?</label>
                  </div>
                </div>
              </div>

              {queryType === 'admission' && (
                <div className="row g-3 mb-4 animate__animated animate__fadeIn">
                  <div className="col-12">
                    <div className="form-floating">
                      <select className="form-select bg-light border-0 rounded-3" id="classSelect" required defaultValue="">
                        <option value="" disabled>Select Class</option>
                        <option value="9th">Class 9th</option>
                        <option value="11th">Class 11th</option>
                      </select>
                      <label htmlFor="classSelect" className="text-muted">Admission For</label>
                    </div>
                  </div>
                </div>
              )}

              <div className="form-floating mb-3">
                  <textarea className="form-control bg-light border-0 rounded-3" placeholder="Your Message" id="floatingTextarea" style={{ height: '100px' }} required></textarea>
                  <label htmlFor="floatingTextarea" className="text-muted">Your Message</label>
                </div>
                <button type="button" className="btn btn-primary rounded-pill px-4 py-2 fw-bold text-uppercase w-100 mt-auto" style={{ backgroundColor: '#ffc300', color: '#001d3d', border: 'none', letterSpacing: '1px', fontSize: '0.85rem' }}>
                  Submit Query
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="col-lg-5">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100 border-top border-4 d-flex flex-column" style={{ borderTopColor: '#ffc300', borderTopStyle: 'solid' }}>
              <h5 className="fw-bold mb-3 text-dark">Contact Information</h5>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-3">
                <li className="d-flex align-items-start">
                  <div className="bg-light p-2 rounded-circle me-3 text-primary d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffc300" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '0.95rem' }}>Address</h6>
                    <span className="text-secondary" style={{ fontSize: '0.9rem' }}>Ward No 11, 1st & 2nd Floor, J.P. Road, Near Style Bazaar / PNB, Bilasipara, Dhubri, Assam 783348</span>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <div className="bg-light p-2 rounded-circle me-3 text-primary d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffc300" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '0.95rem' }}>Phone</h6>
                    <span className="text-secondary" style={{ fontSize: '0.9rem' }}>+91 69009 12323, +91 86387 39867, +91 70020 79313</span>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <div className="bg-light p-2 rounded-circle me-3 text-primary d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffc300" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.95rem' }}>Email</h6>
                    <span className="text-secondary" style={{ fontSize: '0.9rem' }}>quantumpublicschool24@gmail.com</span>
                  </div>
                </li>
              </ul>
              
              <div className="rounded-4 overflow-hidden w-100 shadow-sm mt-auto" style={{ height: '200px', backgroundColor: '#eef2f6' }}>
                <iframe 
                  src="https://maps.google.com/maps?q=Quantum+Public+School,+Bilasipara&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Quantum Public School Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
