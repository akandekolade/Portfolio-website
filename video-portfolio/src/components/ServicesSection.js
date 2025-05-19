import React from 'react';
import { FaFilm, FaPalette, FaBolt, FaMagic, FaVolumeUp, FaLayerGroup } from 'react-icons/fa';

const services = [
  { title: 'Film Editing', desc: 'Professional film editing for all types of projects.', icon: <FaFilm /> },
  { title: 'Colour Grading', desc: 'Enhance your visuals with expert color grading.', icon: <FaPalette /> },
  { title: 'Motion Design', desc: 'Dynamic motion graphics for engaging content.', icon: <FaBolt /> },
  { title: 'Visual Effects', desc: 'Add stunning VFX to your videos.', icon: <FaMagic /> },
  { title: 'Sound Design', desc: 'Cinematic sound design and mixing.', icon: <FaVolumeUp /> },
  { title: 'After Effects Compositing', desc: 'Advanced compositing for polished results.', icon: <FaLayerGroup /> },
];

export default function ServicesSection({ onBook }) {
  return (
    <section className="services-section">
      <h2>Services I Offer</h2>
      <div className="services-list">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
      <button className="services-btn" onClick={onBook}>Book a Service</button>
    </section>
  );
} 