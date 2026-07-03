import React from 'react';
import { Link } from 'react-router-dom';
import './Notice.css';

const Notice = ({ hideHeader = false }) => {
  const notices = [
    { id: 1, title: 'Admission Open for Session 2024-25', date: 'March 15, 2024', isNew: true },
    { id: 2, title: 'Parent-Teacher Meeting for all classes', date: 'March 10, 2024', isNew: false },
    { id: 3, title: 'School Uniform Guidelines Updated', date: 'March 05, 2024', isNew: false },
    { id: 4, title: 'Holiday List for the Academic Year', date: 'February 28, 2024', isNew: false },
    { id: 5, title: 'Inter-School Sports Competition Schedule', date: 'February 20, 2024', isNew: false },
    { id: 6, title: 'Science Exhibition Registration Open', date: 'February 15, 2024', isNew: false },
  ];

  const events = [
    { id: 1, title: 'Annual Sports Day', date: '25', month: 'MAR', time: '09:00 AM' },
    { id: 2, title: 'Science Exhibition', date: '10', month: 'APR', time: '10:00 AM' },
    { id: 3, title: 'Cultural Fest 2024', date: '05', month: 'MAY', time: '04:00 PM' },
    { id: 4, title: 'Summer Camp Begins', date: '15', month: 'JUN', time: '08:30 AM' },
    { id: 5, title: 'Independence Day Celebration', date: '15', month: 'AUG', time: '08:00 AM' },
  ];

  const displayedNotices = hideHeader ? notices : notices.slice(0, 3);
  const displayedEvents = hideHeader ? events : events.slice(0, 3);

  return (
    <section className="py-5 bg-white w-100" id="notice">
      <div className="container py-5 px-4">
        
        {!hideHeader && (
          <div className="text-center mb-5">
             <span className="text-uppercase fw-bold mb-2 d-block" style={{ color: '#ffc300', letterSpacing: '1px', fontSize: '0.85rem' }}>
                Stay Updated
              </span>
              <h2 className="fw-bold text-dark" style={{ fontSize: '2.5rem' }}>
                News & <span style={{ color: '#001d3d' }}>Announcements</span>
              </h2>
          </div>
        )}

        <div className="row g-4 g-lg-5">
          {/* Notice Board Column */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 h-100" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="card-header border-0 bg-transparent py-4 px-4 px-md-5 d-flex align-items-center">
                 <div className="me-3 rounded" style={{ width: '4px', height: '30px', backgroundColor: '#001d3d' }}></div>
                 <h4 className="fw-bold mb-0 text-dark">Notice Board</h4>
              </div>
              <div className="card-body px-4 px-md-5 pb-5 pt-0">
                <div className="list-group list-group-flush border-0">
                  {displayedNotices.map(notice => (
                    <a href="#" key={notice.id} className="list-group-item list-group-item-action bg-transparent border-bottom py-3 px-0 d-flex flex-column justify-content-center" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                      <div className="d-flex w-100 justify-content-between align-items-center mb-2">
                        <small className="fw-bold" style={{ fontSize: '0.8rem', color: '#001d3d' }}>{notice.date}</small>
                        {notice.isNew && <span className="badge rounded-pill bg-danger" style={{ fontSize: '0.7rem' }}>NEW</span>}
                      </div>
                      <h6 className="mb-0 text-dark fw-bold hover-text-primary transition-color" style={{ lineHeight: '1.4' }}>{notice.title}</h6>
                    </a>
                  ))}
                </div>
                {!hideHeader && (
                  <div className="mt-4">
                    <Link to="/notifications" className="text-decoration-none fw-bold text-uppercase d-inline-flex align-items-center hover-opacity" style={{ color: '#001d3d', fontSize: '0.8rem', letterSpacing: '1px', transition: 'opacity 0.2s' }}>
                      View All Notices
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Upcoming Events Column */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 h-100" style={{ backgroundColor: '#eef2f6' }}>
               <div className="card-header border-0 bg-transparent py-4 px-4 px-md-5 d-flex align-items-center">
                 <div className="me-3 rounded" style={{ width: '4px', height: '30px', backgroundColor: '#ffc300' }}></div>
                 <h4 className="fw-bold mb-0 text-dark">Upcoming Events</h4>
              </div>
              <div className="card-body px-4 px-md-5 pb-5 pt-0">
                <div className="d-flex flex-column gap-3">
                  {displayedEvents.map(event => (
                    <div key={event.id} className="bg-white rounded-4 p-3 shadow-sm d-flex align-items-center transition-transform hover-scale border-start" style={{ borderLeftWidth: '4px', borderLeftColor: '#001d3d', borderLeftStyle: 'solid' }}>
                      <div className="text-center pe-3 border-end me-3 min-w-80">
                        <span className="d-block fw-bold" style={{ fontSize: '1.5rem', lineHeight: '1', color: '#001d3d' }}>{event.date}</span>
                        <small className="text-uppercase text-secondary fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>{event.month}</small>
                      </div>
                      <div>
                        <h6 className="fw-bold text-dark mb-1">{event.title}</h6>
                        <small className="text-secondary d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="me-1" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                          </svg>
                          {event.time}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
                {!hideHeader && (
                  <div className="mt-4 pt-2">
                    <Link to="/notifications" className="text-decoration-none fw-bold text-uppercase d-inline-flex align-items-center hover-opacity" style={{ color: '#001d3d', fontSize: '0.8rem', letterSpacing: '1px', transition: 'opacity 0.2s' }}>
                      View All Events
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Notice;
