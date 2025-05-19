import React, { useEffect, useState } from 'react';

const images = [
  // Replace with your Cloudinary image URLs
  'https://res.cloudinary.com/drklysozo/image/upload/v1747375607/da7wga7tfmeg6s0e9qap.jpg',
  'https://res.cloudinary.com/drklysozo/image/upload/v1747375607/oxc8un8af1kbob9hanwy.jpg',
];

const videos = [
  // Replace with your Vimeo video IDs
  '948442489', // Vimeo sample video
  '1014474785', // New video ID
  '1035020974', // New video ID
  '948445905', // New video ID
  '1085810702', // New video ID
];

export default function GallerySection() {
  const [videoTitles, setVideoTitles] = useState({});

  useEffect(() => {
    const fetchVideoTitles = async () => {
      const titles = {};
      for (const id of videos) {
        try {
          const response = await fetch(`https://vimeo.com/api/v2/video/${id}.json`);
          const data = await response.json();
          titles[id] = data[0].title;
        } catch (error) {
          console.error(`Error fetching title for video ${id}:`, error);
        }
      }
      setVideoTitles(titles);
    };

    fetchVideoTitles();
  }, []);

  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {videos.map((id) => (
          <div className="gallery-item" key={id}>
            <div className="video-wrapper">
              <iframe
                src={`https://player.vimeo.com/video/${id}`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`Vimeo Video ${id}`}
              ></iframe>
            </div>
            <h3 className="video-title">{videoTitles[id] || 'Loading...'}</h3>
          </div>
        ))}
        {images.map((url, idx) => (
          <div className="gallery-item" key={url}>
            <img src={url} alt={`Gallery ${idx + 1}`} style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </section>
  );
} 