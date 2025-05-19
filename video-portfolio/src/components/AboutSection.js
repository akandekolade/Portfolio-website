import React from 'react';

export default function AboutSection({ onServices }) {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2>About Me</h2>
        <p>
          I'm Kolade E. Akande A.K.A Kilo.ink, a professional Film and Video Editor, Colorist, Motion Graphics Artist, and Post-Production Consultant with over six years of experience delivering dynamic visuals across feature films, short films, documentaries, music videos, commercials, and branded content.
        </p>
        <p>
          I specialize in full post-production—from editing and color grading to sound design, motion graphics, and VFX—bringing a story-driven approach and technical precision to every frame. I've led post-production on short films like <em>Diamond</em>, <em>In Real Life</em>, and <em>Twist of Fate</em>, and have edited over 30 advert videos, 50+ content videos and reels, as well as 4 music videos. My VFX work spans object removal, text tracking, and 3D overlays, while my motion graphics compositions have elevated campaigns for brands like Zedapex Academy, Kclaut, Top Energy, and Chefs Consult Africa.
        </p>
        <p>
          Whether collaborating with directors or managing the entire post-production pipeline, I bring creativity, discipline, and a commitment to crafting polished, emotionally resonant visual stories.
        </p>
        <button className="about-btn" onClick={onServices}>Services</button>
      </div>
    </section>
  );
} 