import React from 'react';
import './Hero.css';

const Hero = () => {
  const slides = [
    {
      src: "https://images.jdmagicbox.com/v2/comp/bilashipara/q2/9999p3667.3667.250220001757.a3q2/catalogue/quantum-public-school-bilasipara-circle-bilashipara-private-schools-qvnzfrpffr.jpg",
      title: "Welcome to Quantum Public School",
      subtitle: "Empowering Knowledge, Empowering Future"
    },
    {
      src: "https://images.jdmagicbox.com/v2/comp/bilashipara/q2/9999p3667.3667.250220001757.a3q2/catalogue/quantum-public-school-bilasipara-circle-bilashipara-private-schools-xqxztbykl0.jpg",
      title: "Excellence in Education",
      subtitle: "Nurturing Bright Minds for a Better Tomorrow"
    },
    {
      src: "https://images.jdmagicbox.com/v2/comp/bilashipara/q2/9999p3667.3667.250220001757.a3q2/catalogue/quantum-public-school-bilasipara-circle-bilashipara-private-schools-2idoonnjcf.jpg",
      title: "Admissions Open",
      subtitle: "Join Our Growing Family — Class IX to XII"
    }
  ];

  return (
    <div id="heroCarousel" className="carousel slide carousel-fade w-100" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}>
          </button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map(({ src, title, subtitle }, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="hero-img-wrapper">
              <img
                src={src}
                className="d-block w-100 h-100"
                style={{ objectFit: 'cover', opacity: 0.8 }}
                alt={`School Slide ${index + 1}`}
              />
            </div>
            <div className="carousel-caption hero-caption">
              <h2 className="text-white text-shadow hero-title">{title.split(' ').map((word, i) =>
                i === Math.floor(title.split(' ').length / 2)
                  ? <span key={i} style={{ color: '#ffc300' }}>{word} </span>
                  : word + ' '
              )}</h2>
              <p className="text-light text-shadow hero-subtitle mb-0">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
