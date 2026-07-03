import React, { useState } from 'react';
import sideImage from '../../assets/hero.png';

const QueryFormModal = () => {
  const [queryType, setQueryType] = useState('');
  return (
    <div className="modal fade" id="queryFormModal" tabIndex="-1" aria-labelledby="queryFormModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
          <div className="row g-0">
            {/* Left Side: Photo */}
            <div className="col-lg-5 d-none d-lg-block position-relative bg-light">
              <img src={sideImage} alt="School" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to right, rgba(0,29,61,0.2), rgba(0,29,61,0.6))' }}></div>
              <div className="position-absolute bottom-0 start-0 w-100 p-5 text-white z-2">
                <h3 className="fw-bold mb-2">Join Our Community</h3>
                <p className="mb-0 opacity-75">Empowering students to achieve their full potential.</p>
              </div>
            </div>
            
            {/* Right Side: Form */}
            <div className="col-lg-7 position-relative p-4 p-md-5 bg-white">
              <button type="button" className="btn-close position-absolute top-0 end-0 m-4" data-bs-dismiss="modal" aria-label="Close"></button>
              <h4 className="fw-bold mb-4 text-dark" id="queryFormModalLabel">Submit a Query</h4>
              <form>
                <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control bg-light border-0 rounded-3" id="modalFloatingName" placeholder="Your Name" required />
                    <label htmlFor="modalFloatingName" className="text-muted">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control bg-light border-0 rounded-3" id="modalFloatingEmail" placeholder="Email Address" required />
                    <label htmlFor="modalFloatingEmail" className="text-muted">Email Address</label>
                  </div>
                </div>
              </div>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="tel" className="form-control bg-light border-0 rounded-3" id="modalFloatingPhone" placeholder="Phone Number" required />
                    <label htmlFor="modalFloatingPhone" className="text-muted">Phone Number</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select 
                      className="form-select bg-light border-0 rounded-3" 
                      id="modalFloatingSelect" 
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
                    <label htmlFor="modalFloatingSelect" className="text-muted">What are you looking for?</label>
                  </div>
                </div>
              </div>

              {queryType === 'admission' && (
                <div className="row g-3 mb-4 animate__animated animate__fadeIn">
                  <div className="col-12">
                    <div className="form-floating">
                      <select className="form-select bg-light border-0 rounded-3" id="modalClassSelect" required defaultValue="">
                        <option value="" disabled>Select Class</option>
                        <option value="9th">Class 9th</option>
                        <option value="11th">Class 11th</option>
                      </select>
                      <label htmlFor="modalClassSelect" className="text-muted">Admission For</label>
                    </div>
                  </div>
                </div>
              )}

              <div className="form-floating mb-4">
                <textarea className="form-control bg-light border-0 rounded-3" placeholder="Your Message" id="modalFloatingTextarea" style={{ height: '120px' }} required></textarea>
                <label htmlFor="modalFloatingTextarea" className="text-muted">Your Message</label>
              </div>
              <div className="text-end mt-4">
                <button type="button" className="btn btn-light me-2 fw-medium rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary rounded-pill px-5 fw-bold text-uppercase" style={{ backgroundColor: '#ffc300', color: '#001d3d', border: 'none', letterSpacing: '1px' }} data-bs-dismiss="modal">
                  Submit Query
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryFormModal;
