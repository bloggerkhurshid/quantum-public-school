import React from 'react';
import DocumentMeta from '../../components/DocumentMeta/DocumentMeta';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Message from '../../components/Message/Message';
import Notice from '../../components/Notice/Notice';
import Gallery from '../../components/Gallery/Gallery';

const Home = () => {
  return (
    <>
      <DocumentMeta 
        title="Home" 
        description="Welcome to Quantum Public School in Bilasipara. Explore our academics, facilities, and vibrant community." 
      />
      <Hero />
      <About />
      <Message />
      <Notice />
      <Gallery />
    </>
  );
};

export default Home;
