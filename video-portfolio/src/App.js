import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BookingSection from './components/BookingSection';
import GallerySection from './components/GallerySection';
import './App.css';
import { FaInstagram, FaVimeoV } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const bookingRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <nav className="main-nav">
        <div className="nav-logo" onClick={() => scrollTo(homeRef)}>kilo.ink</div>
        <ul className="nav-links">
          <li onClick={() => scrollTo(homeRef)}>Home</li>
          <li onClick={() => scrollTo(aboutRef)}>About</li>
          <li onClick={() => scrollTo(servicesRef)}>Services</li>
          <li onClick={() => scrollTo(galleryRef)}>Gallery</li>
          <li onClick={() => scrollTo(bookingRef)}>Book</li>
        </ul>
      </nav>
      <div ref={homeRef} />
      <HeroSection onGetToKnowMe={() => scrollTo(aboutRef)} />
      <div ref={aboutRef}>
        <AboutSection onServices={() => scrollTo(servicesRef)} />
      </div>
      <div ref={servicesRef}>
        <ServicesSection onBook={() => scrollTo(bookingRef)} />
      </div>
      <div ref={galleryRef}>
        <GallerySection />
      </div>
      <div ref={bookingRef}>
        <BookingSection />
      </div>
      <footer className="main-footer">
        <div className="social-links">
          <a href="https://www.instagram.com/kilo.ink.dump/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          <a href="https://x.com/Kilokanmi00" target="_blank" rel="noopener noreferrer"><FaXTwitter size={30} /></a>
          <a href="https://vimeo.com/user219944344" target="_blank" rel="noopener noreferrer"><FaVimeoV size={30} /></a>
        </div>
        © 2024 kilo.ink. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
