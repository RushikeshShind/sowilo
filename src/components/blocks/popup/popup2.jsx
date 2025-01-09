import { useState, useEffect } from 'react';
import color from 'utils/color';

// Main component
const Popup2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button onClick={togglePopup} style={styles.button}>
        Contact Me
      </button>

      <PopupModal isOpen={isPopupOpen} onClose={togglePopup}>
        <h6 className="display-5 text-center" style={{ color: 'black' }}>Contact</h6>
        <ul style={{ color: 'black' }}>
          I can be reached at <strong>24shiital@gmail.com</strong> (preferred) and <strong>+1 781 929 0606</strong> <br />
          (iMessage and WhatsApp; calls with appointments, please).
        </ul>
      </PopupModal>
    </div>
  );
};

// PopupModal component with scrolling disabled
const PopupModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup to ensure no side effects when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div style={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: '#eab085',
    color: 'white',
    border: 'none',
    padding: '10px 10px',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
    fontFamily: 'Cormorant',
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
    backgroundColor: '#9FC3C6',
    padding: '20px',
    borderRadius: '8px',
    width: '800px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    maxHeight: '80vh',
    overflow: 'hidden', // Prevents overflow outside the popup container
  },
  closeButton: {
    position: 'absolute',
    top: '12px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  content: {
    maxHeight: '80vh', // Content will scroll if it exceeds this height
    overflowY: 'auto', // Enables vertical scrolling if content overflows
    paddingRight: '10px', // Adds some padding to the right for scrollbar visibility
    color: 'white',
  },
};

export default Popup2;
