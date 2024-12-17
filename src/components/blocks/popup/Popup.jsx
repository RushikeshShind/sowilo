import { useState } from 'react';
import color from 'utils/color';

// Main component
const Popup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <div style={styles.banner}>
        <h1 className='display-1 text-center' style={{ fontFamily: 'EditorsNote'   }}>To know more about the Seven Developmental Stages!</h1>
        <button onClick={togglePopup} style={styles.button }>
          Click here
        </button>
      </div>

      {/* Use PopupModal instead of Popup to avoid name conflict */}
      <PopupModal isOpen={isPopupOpen} onClose={togglePopup}>
        <h6 className='display-5 text-center'style={{color:'white'}}>The Seven Developmental Phases</h6>
        <ul>
          <strong>1. Existence (2nd trimester → 3 months):</strong>
          <li>
            This stage focuses on the basic imprint of one’s right to exist and the sense of being alive, starting from the womb life to early infancy. Disruptions in this stage can lead to either withdrawal from connection or anxiousness about potential loss of connection. Key themes include sensations, emotions, contact, mirroring, and the distinction between the ‘Me’ and the ‘I’ (Ego).
          </li>
          <br />
          <strong>2. Need (1 month → 18 months):</strong>
          <li>This stage revolves around the infant’s experience of having their basic needs met in relation to their parents. Disruptions can lead to either a despairing or distrustful attitude about getting needs met. Key themes include establishing rhythms, mirroring, exploring in contact with others, and connecting words with emotions and needs.</li>
          <br />
          <strong>3. Autonomy (8 months → 2 years, 6 months):</strong>
          <li>Here, the child’s curiosity drives them to explore the world, marking their journey towards autonomy. Disruptions can lead to a lack of awareness of one’s impulses or a fear of commitment. Key themes include curiosity, distinguishing emotions, mastering activities, and learning to use the toilet.</li>
          <br />
          <strong>4. Will (2 → 4 years):</strong>
          <li>This stage is about the child’s ability to separate thinking, intentions, and actions, making choices, and putting power into action. Disruptions can result in either acting from a self-sacrificing position or holding back power. Key themes include choice and consequences, managing power, distinguishing between intention and action, and understanding dualities.</li>
          <br />
          <strong>5. Love/Sexuality (3 → 6 years):</strong>
          <li>This stage focuses on the child’s learning to love in a romantic way and integrating heart and sensual feelings. Disruptions can lead to a split between loving and sensual feelings. Key themes include awareness of one’s gender, integration of love and sensuality, and balancing loving, intimate, and sensual emotions in social contexts.</li>
          <br />
          <strong>6. Opinion (5 → 9 years):</strong>
          <li>The child learns to express themselves in words and deals with rules, norms, and culture. Disruptions can lead to difficulty in forming and expressing opinions or having rigid opinions. Key themes include understanding meanings of words, reality testing, forming own opinions, and using arguments.</li>
          <br />
          <strong>7. Performance/Solidarity (7 → 12 years):</strong>
          <li>Children in this stage seek to find their role within groups and the broader culture, often gravitating towards same-sex groups. They experiment with various roles, from leadership to mediation, while also striving to specialize in specific skills or hobbies. Disruptions in adulthood can lead to either a fear of competition or an overwhelming need to stand out in group settings.</li>
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
    color: '#9FC3C6',
    border: 'none',
    padding: '10px 10px',
    fontSize: '15px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
  fontFamily: 'EditorsNote'
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

export default Popup;
