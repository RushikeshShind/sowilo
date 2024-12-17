import { useState } from 'react';
import color from 'utils/color';

// Main component
const Popup2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      
        
        <button onClick={togglePopup} style={styles.button }>
          Contact Me
        </button>
     

      {/* Use PopupModal instead of Popup to avoid name conflict */}
      <PopupModal isOpen={isPopupOpen} onClose={togglePopup}>
        <h6 className='display-5 text-center'style={{color:'white'}}>Contact</h6>
        <ul style={{color:'black'}}>
          
     
          I can be reached at <strong>24shiital@gmail.com</strong>  (preferred) and <strong> +1 781 929 0606</strong> <br />(iMessage and What’s App; calls with appointments, please).
       
          
        </ul>
      </PopupModal>
    </div>
  );
};

// Renamed Popup component to PopupModal to avoid conflict
const PopupModal = ({ isOpen, onClose, children }) => {
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
  banner: {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'EditorNote',
  },
  button: {
    color:'White',
    backgroundColor: '#fff',
    color: 'black',
    border: 'none',
    padding: '10px 10px',
    fontSize: '15px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
    fontFamily:'Sinclaire',
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
    maxHeight: '80vh',  // Limits the popup height to 80% of the viewport height
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
    color:'White'
  },
};

export default Popup2;
