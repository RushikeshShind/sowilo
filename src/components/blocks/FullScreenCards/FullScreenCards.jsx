import React from 'react';

const FullScreenCards = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',
      height: '90%',
      margin: '0',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Foundation Training Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: '#d4e3df',
        minHeight: '400px',
        
      }}>
        <h4 style={{
          color: '#55B9A6',
          fontSize: '1.8rem',
          letterSpacing: '2px',
          marginBottom: '1rem',
          fontFamily:'Sinclaire'
        }}>Foundation Training:</h4>
        <h2 style={{
          fontSize: '1.2rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '',
          fontFamily:'Cormorant'
        }}>
          The Foundation Training is a comprehensive one-year introductory program in the Bodynamic System.
        </h2>
        <p style={{
            fontFamily:'Cormorant',
          color: '#444',
          fontSize:'1rem',
          marginBottom: '1.5rem',
        }}>
          This foundational course explores character structures, character positions, and the fundamental concepts underlying contact and communication within the system. These concepts include mutual connection, dignity, boundaries, centering, and grounding.
        </p>
        <ul style={{ listStyle: 'none', padding: '0', color: '#444', fontSize: '1rem' ,fontFamily:'Cormorant' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            ➤ The training provides a detailed analysis of childhood developmental phases, highlighting central developmental challenges and their connection to emerging defense mechanisms.
          </li>
          <li>
            ➤ Through this program, you will refine your professional skills, cultivating greater presence, depth, and effectiveness in your work.
          </li>
        </ul>
        <button style={{
          backgroundColor: '#55B9A6',
          color: '#fff',
          border: 'none',
          padding: '0.8rem 1.2rem',
          cursor: 'pointer',
          fontWeight: '600',
          marginTop: '1.5rem',
          fontFamily:'Cormorant'
        }}>
          JOIN NOW
        </button>
      </div>
      <div style={{
        backgroundImage: 'url("/img/photos/bg39.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
      }}></div>

      {/* Empowered Email Marketing Section */}
     
        <div style={{
        backgroundImage: 'url("https://via.placeholder.com/400x400")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px',
      }}></div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem',
        backgroundColor: '#d4e3df',
        minHeight: '400px',
      }}>
        <h4 style={{
          color: '#55B9A6',
          fontSize: '0.8rem',
          letterSpacing: '2px',
          marginBottom: '1rem',
        }}>TRANSFORM YOUR EMAIL STRATEGY</h4>
        <h2 style={{
          fontSize: '2.2rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#222',
        }}>
          EMPOWERED EMAIL MARKETING
        </h2>
        <p style={{
          fontStyle: 'italic',
          color: '#666',
          marginBottom: '1.5rem',
        }}>
          Easily create engaging email campaigns that convert.
        </p>
        <ul style={{ listStyle: 'none', padding: '0', color: '#444', fontSize: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            ➤ <strong>Build an engaged email community</strong> that converts subscribers.
          </li>
          <li>
            ➤ 6-module course + templates & strategy guides.
          </li>
        </ul>
        <button style={{
          backgroundColor: '#55B9A6',
          color: '#fff',
          border: 'none',
          padding: '0.8rem 1.2rem',
          cursor: 'pointer',
          fontWeight: '600',
          marginTop: '1.5rem',
        }}>
          JOIN NOW
        </button>
      </div>
    </div>

  );
};

export default FullScreenCards;
