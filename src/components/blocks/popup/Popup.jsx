import { useState } from 'react';
const popup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <div style={styles.banner}>
        <h1>To know more about the Seven Developmental Stages!</h1>
        <button onClick={togglePopup} style={styles.button}>
          Click here
        </button>
      </div>

      <Popup isOpen={isPopupOpen} onClose={togglePopup}>
        <h6>The Seven Developmental Phases</h6>
        <ul> <strong>1. Existence (2nd trimester → 3 months):  </strong>
            <li style={{fontSize:'12px'}}>This stage focuses on the basic imprint of one’s right to exist and the sense of being alive, starting from the womb life to early infancy. Disruptions in this stage can lead to either withdrawal from connection or anxiousness about potential loss of connection. Key themes include sensations, emotions, contact, mirroring, and the distinction between the ‘Me’ and the ‘I’ (Ego).</li>
        </ul>
        
      </Popup>
    </div>
  );
};

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    backgroundColor: 'white',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontFamily:'EditorNote'
  },
  button: {
    backgroundColor: '#fff',
    color: '#4CAF50',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popup: {
    backgroundColor: '#ffd68c',
    padding: '50px',
    borderRadius: '0px',
    width: '1200px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
};

export default popup;
