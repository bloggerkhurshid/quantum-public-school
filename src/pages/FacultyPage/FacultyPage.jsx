import React from 'react';
import DocumentMeta from '../../components/DocumentMeta/DocumentMeta';

const FacultyPage = () => {
  const facultyList = [
    {
      name: "Abdul Bari",
      role: "Principal",
      subject: "Administration & Physics",
      qualifications: "M.Sc. Physics, B.Ed.",
      contact: "+91 69009 12323"
    },
    {
      name: "Syed Abdur Rahman",
      role: "Vice Principal",
      subject: "Mathematics",
      qualifications: "M.Sc. Mathematics, B.Ed.",
      contact: "+91 86387 39867"
    },
    {
      name: "Sharif Sheikh",
      role: "Academic Coordinator",
      subject: "Chemistry",
      qualifications: "M.Sc. Chemistry",
      contact: "+91 70020 79313"
    },
    {
      name: "John Doe",
      role: "Senior Faculty",
      subject: "Biology",
      qualifications: "M.Sc. Biology, B.Ed.",
      contact: "+91 00000 00000"
    },
    {
      name: "Jane Smith",
      role: "Faculty",
      subject: "English",
      qualifications: "M.A. English, B.Ed.",
      contact: "+91 00000 00000"
    },
    {
      name: "Robert Brown",
      role: "Faculty",
      subject: "Computer Science",
      qualifications: "MCA",
      contact: "+91 00000 00000"
    }
  ];

  return (
    <div>
      <DocumentMeta 
        title="Our Faculty" 
        description="Meet the highly qualified and experienced educators at Quantum Public School." 
      />
      <div className="py-4 mb-4 border-bottom">
        <div className="container">
          <h2 className="fw-bold text-dark mb-2">Our <span style={{ color: '#ffc300' }}>Faculty</span></h2>
          <p className="mb-0 text-secondary" style={{ maxWidth: '700px', fontSize: '0.95rem' }}>
            Meet our highly qualified and experienced educators dedicated to student-centric mentoring and academic excellence.
          </p>
        </div>
      </div>
      
      <div className="container py-5 px-4 mb-5">
        <div className="row g-4">
          {facultyList.map((faculty, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 shadow-sm h-100 overflow-hidden border" style={{ borderColor: '#eef2f6' }}>
                <div 
                  className="d-flex align-items-center justify-content-center position-relative" 
                  style={{ 
                    height: '240px', 
                    backgroundColor: index % 2 === 0 ? '#001d3d' : '#ffc300', 
                    color: index % 2 === 0 ? '#fff' : '#001d3d' 
                  }}
                >
                  {/* Subtle pattern background for the image block */}
                  <div className="position-absolute w-100 h-100" style={{ opacity: 0.1, backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '15px 15px' }}></div>
                  <span className="position-relative z-1" style={{ fontSize: '4.5rem', fontWeight: 'bold', letterSpacing: '-2px' }}>
                    {faculty.role.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="p-4 text-center">
                  <span className="badge rounded-pill mb-4" style={{ backgroundColor: '#eef2f6', color: '#001d3d', fontSize: '0.75rem' }}>{faculty.role}</span>
                  
                  <ul className="list-unstyled mb-0 text-secondary text-start" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                    <li className="mb-2 pb-2 border-bottom" style={{ borderColor: '#f8f9fa' }}>
                      <strong className="text-dark d-block mb-1" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Subject</strong> 
                      {faculty.subject}
                    </li>
                    <li>
                      <strong className="text-dark d-block mb-1" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact Number</strong> 
                      {faculty.contact}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
