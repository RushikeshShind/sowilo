import { useState } from 'react';
import color from 'utils/color';

// Main component
const Popup5 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      
        
        <button onClick={togglePopup} style={styles.button }>
        Our Communication Policy
        </button>
     

      {/* Use PopupModal instead of Popup to avoid name conflict */}
      <PopupModal isOpen={isPopupOpen} onClose={togglePopup}>
        <h6 className='display-5 text-center'style={{color:'white'}}> <strong>  SOWILO LLC, <br />
3705 SW 27TH ST <br />
APT 1011 <br />
GAINESVILLE, FL 32608</strong> Our Communication Policy</h6>
        <ul style={{color:'black', textAlign:'justify'}}>
          
     
     
        This document outlines our office policies related to communication and use of Social Media. Please read it to understand how we conduct ourselves on the Internet as providers and how you can expect us to respond to various interactions that may occur between us on the Internet. If you have any questions about anything within this document, we encourage you to bring them up when we meet. As new technology develops and the Internet changes, there may be times when we need to update this policy. If we do so, we will notify you in writing of any policy changes and make sure you have a copy of the updated policy.
 <br />
<strong> Email </strong> <br />
 By communicating with us, you understand and agree that we may communicate by email.  You are aware of the inherent security risks of email communications and represent that we may reasonably rely on emails sent from the email address you provide to us as sent by you alone and that we may rely on the emails as if your signature were affixed to them.
  
 We prefer using email as a second choice in arranging or modifying appointments. (Our first choice, due to our 48-hour cancellation policy and the need for timely scheduling, is to call for all appointment changes). Please do not email content related to your personal coaching sessions, as email is not completely secure or confidential. If you choose to communicate with us by email, be aware that all emails are retained in the logs of your and our Internet service providers. While it is unlikely that someone will be looking at these logs, they are, in theory, available to be read by the system administrator(s) of the Internet service provider. You should also know that any emails we receive from you and any responses that we send to you become a part of your record.
  <br />
  
 <strong>Interacting</strong><br />
 Please be aware that using SMS (mobile phone text messaging) or messaging on Social Networking sites such as Instagram, LinkedIn, Twitter or Facebook is not the best way to contact us. These sites are not secure, and we will not read these messages in a timely fashion. Do not use wall postings, @replies, or other means of engaging with our providers in public online if we have an already established client/provider relationship. Engaging with us this way could compromise your confidentiality. It may also create the possibility that these exchanges become a part of your record. If you need to contact us between sessions, the best way to do so is by phone. Direct email <strong> (connect@sowilosoul.coml)</strong> is second best for quick, administrative issues such as changing appointment times, but be aware that she works part time, and there is a 48-business hour cancellation policy. See the email section below for more information regarding email interactions. In addition, all clients sign an agreement regarding emailing and texting.
  <br />
 <strong>Conclusion</strong> <br />
 Thank you for taking the time to review our communication policy. If you have questions or concerns about any of these policies and procedures or regarding our potential interactions on the Internet, do bring them to our attention so that we can  discuss them.


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
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Cormorant',
  },
  button: {
    color:'',
    backgroundColor: '#0e5d6E',
    color: ' #eab085',
    border: 'none',
    padding: '10px 10px',
    fontSize: '15px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
    fontFamily:'Cormorant',
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

export default Popup5;
