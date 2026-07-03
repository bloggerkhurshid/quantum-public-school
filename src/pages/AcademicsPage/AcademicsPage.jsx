import React from 'react';
import DocumentMeta from '../../components/DocumentMeta/DocumentMeta';

const AcademicsPage = () => {
  return (
    <div>
      <DocumentMeta
        title="Academics"
        description="Explore our specialized Class IX to XII curriculum, including dedicated Integrated NEET and JEE coaching."
      />
      <div className="py-4 mt-4 mb-4 border-bottom">
        <div className="container">
          <h2 className="fw-bold text-dark mb-2">Academic Streams & <span style={{ color: '#ffc300' }}>Structure</span></h2>
          <p className="mb-0 text-secondary" style={{ maxWidth: '800px', fontSize: '0.95rem' }}>
            Quantum Public School in Bilasipara combines formal state-board schooling under ASSEB (Division II) with integrated coaching tailored for national medical and engineering entrance exams like NEET and JEE.
          </p>
        </div>
      </div>

      <div className="container px-4 pb-5">

        {/* Academic Streams & Structure */}
        <div className="mb-5">
          <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">

            {/* Secondary */}
            <div className="row align-items-center mb-5 pb-5 border-bottom" style={{ borderColor: '#eef2f6' }}>
              <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
                <div className="d-inline-flex flex-column align-items-center align-items-md-start">
                  <span className="badge px-4 py-2 rounded-pill mb-3" style={{ backgroundColor: '#001d3d', color: '#fff', fontSize: '0.85rem', letterSpacing: '1px' }}>CLASS IX & X</span>
                  <h3 className="fw-bold text-dark mb-0" style={{ fontSize: '2rem' }}>Secondary</h3>
                </div>
              </div>
              <div className="col-md-8">
                <p className="text-secondary mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  General high school curriculum focusing on building strong foundations in core subjects before senior secondary streaming. Instruction is structurally split into both English and Assamese mediums to assist diverse learning preferences.
                </p>
              </div>
            </div>

            {/* Senior Secondary */}
            <div className="row align-items-center">
              <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
                <div className="d-inline-flex flex-column align-items-center align-items-md-start">
                  <span className="badge px-4 py-2 rounded-pill mb-3" style={{ backgroundColor: '#ffc300', color: '#001d3d', fontSize: '0.85rem', letterSpacing: '1px' }}>CLASS XI & XII</span>
                  <h3 className="fw-bold text-dark mb-0" style={{ fontSize: '2rem' }}>Senior Secondary</h3>
                </div>
              </div>
              <div className="col-md-8">
                <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Higher Secondary education offered in two major streams:
                </p>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="p-4 rounded-4 h-100 transition-transform hover-scale bg-white shadow-sm">
                      <div className="mb-3">
                        <h5 className="fw-bold text-dark mb-0">Science Stream</h5>
                      </div>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Focused on core medical & engineering prerequisites.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-4 rounded-4 h-100 transition-transform hover-scale bg-white shadow-sm">
                      <div className="mb-3">
                        <h5 className="fw-bold text-dark mb-0">Arts Stream</h5>
                      </div>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Focused on humanities and social sciences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Academic Frameworks */}
        <div className="mb-5 pb-4">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-dark mb-3" style={{ fontSize: '2rem' }}>Core Academic Frameworks</h3>
            <p className="text-secondary mx-auto" style={{ maxWidth: '600px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Specialized academic programs designed to accelerate student learning and ensure competitive readiness.
            </p>
          </div>
          <div className="row g-4">

            {/* Integrated Coaching */}
            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-4 h-100 shadow-sm border transition-transform hover-scale d-flex flex-column align-items-center text-center" style={{ borderColor: '#eef2f6' }}>
                <div className="mb-4 d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: '70px', height: '70px', backgroundColor: 'rgba(0, 29, 61, 0.05)', color: '#001d3d' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bullseye" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/><path d="M8 11A3 3 0 1 1 8 5a3 3 0 0 1 0 6zm0 1A4 4 0 1 0 8 4a4 4 0 0 0 0 8z"/><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
                </div>
                <h5 className="fw-bold text-dark mb-3">Integrated Coaching (IC)</h5>
                <p className="text-secondary mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                  A special combined curriculum for Class XI students that natively embeds NEET and JEE preparation directly into daily board class schedules.
                </p>
              </div>
            </div>

            {/* Bridge Courses */}
            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-4 h-100 shadow-sm border transition-transform hover-scale d-flex flex-column align-items-center text-center" style={{ borderColor: '#eef2f6' }}>
                <div className="mb-4 d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: '70px', height: '70px', backgroundColor: 'rgba(255,195,0,0.15)', color: '#ffc300' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-puzzle-fill" viewBox="0 0 16 16"><path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7v1a1 1 0 0 0 2 0V2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237a1.5 1.5 0 0 1 1.5 1.5v.237a1.5 1.5 0 0 1-1.5 1.5h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9v-1a1 1 0 0 0-2 0v1H4.605a1.5 1.5 0 0 1-1.493-1.645L3.355 9.5H3.118a1.5 1.5 0 0 1-1.5-1.5v-.237a1.5 1.5 0 0 1 1.5-1.5h.237L3.112 3.645Z"/></svg>
                </div>
                <h5 className="fw-bold text-dark mb-3">Bridge Courses</h5>
                <p className="text-secondary mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Specialized preparatory modules designed for Class X graduates transitioning into rigorous Higher Secondary topics.
                </p>
              </div>
            </div>

            {/* Crash Courses */}
            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-4 h-100 shadow-sm border transition-transform hover-scale d-flex flex-column align-items-center text-center" style={{ borderColor: '#eef2f6' }}>
                <div className="mb-4 d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: '70px', height: '70px', backgroundColor: '#eef2f6', color: '#001d3d' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>
                </div>
                <h5 className="fw-bold text-dark mb-3">Crash Courses</h5>
                <p className="text-secondary mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Fast-track revision and question-practice batches hosted specifically for Class XII students appearing for medical and engineering entrance exams.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Evaluation & Infrastructure (Cards with Images) */}
        <div className="mb-5">
          <h3 className="fw-bold text-dark border-bottom pb-2 mb-4" style={{ borderColor: '#eef2f6' }}>Evaluation & Infrastructure</h3>
          <div className="row g-4">
            {/* QSCAT */}
            <div className="col-md-6 col-lg-3">
              <div className="rounded-4 shadow-sm h-100 overflow-hidden position-relative transition-transform hover-scale" style={{ minHeight: '320px' }}>
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" alt="QSCAT Exam" className="position-absolute w-100 h-100" style={{ objectFit: 'cover' }} />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,29,61,0.95), rgba(0,29,61,0.3) 60%, transparent)' }}></div>
                <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                  <div className="badge rounded-pill mb-2 px-3 py-1" style={{ backgroundColor: '#ffc300', color: '#001d3d', fontSize: '0.75rem' }}>QSCAT</div>
                  <h5 className="fw-bold text-white mb-2">Scholarship Test</h5>
                  <p className="small mb-0 opacity-75" style={{ lineHeight: '1.5' }}>Competitive entrance and talent-search exam to screen candidates and distribute merit-based scholarships.</p>
                </div>
              </div>
            </div>

            {/* Smart Classrooms */}
            <div className="col-md-6 col-lg-3">
              <div className="rounded-4 shadow-sm h-100 overflow-hidden position-relative transition-transform hover-scale" style={{ minHeight: '320px' }}>
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" alt="Smart Classrooms" className="position-absolute w-100 h-100" style={{ objectFit: 'cover' }} />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,29,61,0.95), rgba(0,29,61,0.3) 60%, transparent)' }}></div>
                <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                  <div className="badge rounded-pill mb-2 px-3 py-1 bg-primary text-white" style={{ fontSize: '0.75rem' }}>TECH</div>
                  <h5 className="fw-bold text-white mb-2">Smart Classrooms</h5>
                  <p className="small mb-0 opacity-75" style={{ lineHeight: '1.5' }}>Teaching is supplemented by smartboard multimedia systems to present highly complex STEM theories visually.</p>
                </div>
              </div>
            </div>

            {/* Practical Learning */}
            <div className="col-md-6 col-lg-3">
              <div className="rounded-4 shadow-sm h-100 overflow-hidden position-relative transition-transform hover-scale" style={{ minHeight: '320px' }}>
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" alt="Practical Learning Labs" className="position-absolute w-100 h-100" style={{ objectFit: 'cover' }} />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,29,61,0.95), rgba(0,29,61,0.3) 60%, transparent)' }}></div>
                <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                  <div className="badge rounded-pill mb-2 px-3 py-1 bg-success text-white" style={{ fontSize: '0.75rem' }}>LABS</div>
                  <h5 className="fw-bold text-white mb-2">Practical Learning</h5>
                  <p className="small mb-0 opacity-75" style={{ lineHeight: '1.5' }}>Built-in science laboratories configured to allow practical experiments synced to the state board syllabus.</p>
                </div>
              </div>
            </div>

            {/* Resource Center */}
            <div className="col-md-6 col-lg-3">
              <div className="rounded-4 shadow-sm h-100 overflow-hidden position-relative transition-transform hover-scale" style={{ minHeight: '320px' }}>
                <img src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800" alt="Resource Center Library" className="position-absolute w-100 h-100" style={{ objectFit: 'cover' }} />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,29,61,0.95), rgba(0,29,61,0.3) 60%, transparent)' }}></div>
                <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                  <div className="badge rounded-pill mb-2 px-3 py-1 bg-info text-dark" style={{ fontSize: '0.75rem' }}>LIBS</div>
                  <h5 className="fw-bold text-white mb-2">Resource Center</h5>
                  <p className="small mb-0 opacity-75" style={{ lineHeight: '1.5' }}>Access to academic references, competitive study modules, question banks, and general reading literature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
