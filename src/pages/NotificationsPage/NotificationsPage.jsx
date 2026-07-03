import React from 'react';
import DocumentMeta from '../../components/DocumentMeta/DocumentMeta';
import Notice from '../../components/Notice/Notice';

const NotificationsPage = () => {
  return (
    <div>
      <DocumentMeta 
        title="Notifications" 
        description="Stay updated with the latest news, announcements, and upcoming events at Quantum Public School." 
      />
      <div className="py-4 mt-4 mb-4 border-bottom">
        <div className="container">
          <h2 className="fw-bold text-dark mb-2">Notice <span style={{ color: '#ffc300' }}>Board</span></h2>
          <p className="mb-0 text-secondary" style={{ maxWidth: '700px', fontSize: '0.95rem' }}>
            Stay updated with the latest news, announcements, and upcoming events at Quantum Public School.
          </p>
        </div>
      </div>
      <Notice hideHeader={true} />
    </div>
  );
};

export default NotificationsPage;
