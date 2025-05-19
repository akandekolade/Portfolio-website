import React from 'react';

const roles = ['EDITOR', 'MOTION DESIGNER', 'CONTENT CREATOR'];
const bgImages = [
  'https://res.cloudinary.com/drklysozo/image/upload/v1747375607/da7wga7tfmeg6s0e9qap.jpg',
  'https://res.cloudinary.com/drklysozo/image/upload/v1747685766/1_1.14.1_bveiav.jpg',
  'https://res.cloudinary.com/drklysozo/image/upload/v1747685783/1_1.6.1_nskdue.jpg',
];

export default function HeroSection({ onGetToKnowMe }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `url(${bgImages[index]}) center/cover no-repeat`,
        transition: 'background-image 0.8s',
      }}
    >
      <div className="hero-overlay" style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(255,255,255,0.5)',
        zIndex: 0,
      }} />
      <h1 className="hero-name" style={{ fontSize: '4rem', fontWeight: 'bold', color: '#181f2a', zIndex: 1, marginBottom: '0.5em', textAlign: 'center' }}>
        Kolade E. Akande
      </h1>
      <h2 className="hero-roles" style={{ fontSize: '2.2rem', color: '#2ecc40', zIndex: 1, marginBottom: '1.5em', minHeight: '2.2em', letterSpacing: '2px', textAlign: 'center' }}>
        {roles[index]}
      </h2>
      <button className="hero-btn" style={{ zIndex: 1 }} onClick={onGetToKnowMe}>Get to Know Me</button>
    </section>
  );
} 