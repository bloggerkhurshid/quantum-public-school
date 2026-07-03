import React from 'react';
import DocumentMeta from '../../components/DocumentMeta/DocumentMeta';
import Gallery from '../../components/Gallery/Gallery';

const GalleryPage = () => {
  return (
    <div>
      <DocumentMeta 
        title="Photo Gallery" 
        description="View our photo gallery to see the vibrant life, events, and modern facilities at Quantum Public School." 
      />
      <div className="py-4 mt-4 mb-4 border-bottom">
        <div className="container">
          <h2 className="fw-bold text-dark mb-2">Our <span style={{ color: '#ffc300' }}>Gallery</span></h2>
          <p className="mb-0 text-secondary" style={{ maxWidth: '700px', fontSize: '0.95rem' }}>
            Take a visual tour of Quantum Public School. Explore our vibrant campus life, academic activities, and modern facilities.
          </p>
        </div>
      </div>
      <Gallery hideHeader={true} hideButton={true} />
    </div>
  );
};

export default GalleryPage;
