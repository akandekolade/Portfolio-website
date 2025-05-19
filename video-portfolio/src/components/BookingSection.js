import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // EmailJS integration

const services = [
  'Film Editing',
  'Colour Grading',
  'Motion Design',
  'Visual Effects',
  'Sound Design',
  'After Effects Compositing',
];

export default function BookingSection() {
  const [form, setForm] = useState({ name: '', email: '', service: '', narration: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.send(
      'service_oev5frp',      // <-- Replace with your EmailJS Service ID
      'template_ytv9t2t',    // <-- Use the correct Template ID here
      form,
      'aoLX6_1aMhJYHIx4q'      // <-- Replace with your EmailJS Public Key
    )
    .then(
      () => {
        setStatus('Sent!');
        setForm({ name: '', email: '', service: '', narration: '' });
        setTimeout(() => setStatus(''), 3000);
      },
      (error) => {
        setStatus('Failed to send.');
        console.error('EmailJS error:', error);
      }
    );
  };

  return (
    <section className="booking-section">
      <h2>Book a Service</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">Choose Service</option>
          {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
        <textarea name="narration" placeholder="Describe your project..." value={form.narration} onChange={handleChange} required />
        <button type="submit">Book</button>
      </form>
      {status && <p className="booking-status">{status}</p>}
    </section>
  );
} 