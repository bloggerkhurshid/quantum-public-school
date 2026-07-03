import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ hideHeader = false, hideButton = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://images.jdmagicbox.com/v2/comp/bilashipara/q2/9999p3667.3667.250220001757.a3q2/catalogue/quantum-public-school-bilasipara-circle-bilashipara-private-schools-qvnzfrpffr.jpg",
    "https://images.jdmagicbox.com/v2/comp/bilashipara/q2/9999p3667.3667.250220001757.a3q2/catalogue/quantum-public-school-bilasipara-circle-bilashipara-private-schools-xqxztbykl0.jpg",
    "https://images.jdmagicbox.com/v2/comp/bilashipara/q2/9999p3667.3667.250220001757.a3q2/catalogue/quantum-public-school-bilasipara-circle-bilashipara-private-schools-2idoonnjcf.jpg",
    "https://content3.jdmagicbox.com/v2/comp/bilashipara/q2/9999p3667.3667.250220001757.a3q2/catalogue/quantum-public-school-bilasipara-circle-bilashipara-private-schools-60zu2ltqb1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNlH7hEIO2DpldEuBmVQvA7si0LDibqst1n1IjiELr6u-rC1g-AZdcLw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhyQDIe1RsfUWmamxsfZESgT4J58OcMOtR7ru_qJ_7cLgL42995lezjU&s=10"
  ];

  return (
    <>
      <section className="py-5 w-100" id="gallery">
        <div className="container py-5 px-4">
          
          {!hideHeader && (
            <div className="text-center mb-5">
               <span className="text-uppercase fw-bold mb-2 d-block" style={{ color: '#ffc300', letterSpacing: '1px', fontSize: '0.85rem' }}>
                  Our Memories
                </span>
                <h2 className="fw-bold text-dark" style={{ fontSize: '2.5rem' }}>
                  Photo <span style={{ color: '#001d3d' }}>Gallery</span>
                </h2>
            </div>
          )}

          <div className="row g-4">
            {images.map((src, index) => (
              <div key={index} className="col-sm-6 col-md-4">
                <div 
                  className="position-relative overflow-hidden rounded-4 shadow-sm" 
                  style={{ height: '280px', cursor: 'pointer' }}
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`School Gallery ${index + 1}`} 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  
                  {/* Subtle zoom icon overlay on hover */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
                    style={{ backgroundColor: 'rgba(0,0,0,0.15)', opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                    onMouseOut={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                      <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1z"/>
                      <path fillRule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!hideButton && (
            <div className="text-center mt-5 pt-3">
              <Link to="/gallery" className="text-decoration-none fw-bold text-uppercase d-inline-flex align-items-center hover-opacity" style={{ color: '#001d3d', fontSize: '0.85rem', letterSpacing: '1px', transition: 'opacity 0.2s' }}>
                View Full Gallery
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
          style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999 }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="btn btn-link position-absolute top-0 end-0 m-4 text-white p-0" 
            style={{ zIndex: 10000 }}
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: '90vh', maxWidth: '90vw' }}
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
