import { useState } from 'react';

// Main component
const Popup5 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button onClick={togglePopup} style={styles.button}>
        Our Communication Policy
      </button>

      <PopupModal isOpen={isPopupOpen} onClose={togglePopup}>
        <h6
          className="display-5 text-center"
          style={{ color: 'black', fontFamily: 'byutih' }}
        >
          <strong>
            SOWILO LLC, <br />
            <p style={{ fontFamily: 'cormorant', fontSize: '20px' }}>
              3705 SW 27TH ST <br />
              APT 1011 <br />
              GAINESVILLE, FL 32608
            </p>
          </strong>
          <i>-------------------------------</i>
          <br /> Our Communication Policy
        </h6>
        <ul style={{ color: 'black', textAlign: 'justify', padding: '0 10px' }}>
          <li>
            This document outlines our office policies related to communication
            and use of Social Media. Please read it to understand how we
            conduct ourselves on the Internet as providers and how you can
            expect us to respond to various interactions that may occur between
            us on the Internet. If you have any questions about anything within
            this document, we encourage you to bring them up when we meet. As
            new technology develops and the Internet changes, there may be
            times when we need to update this policy. If we do so, we will
            notify you in writing of any policy changes and make sure you have
            a copy of the updated policy.
          </li>
          <br />
          <strong>Email</strong>
          <li>
            By communicating with us, you understand and agree that we may
            communicate by email. You are aware of the inherent security risks
            of email communications and represent that we may reasonably rely
            on emails sent from the email address you provide to us as sent by
            you alone and that we may rely on the emails as if your signature
            were affixed to them.
          </li>
          <li>
            We prefer using email as a second choice in arranging or modifying
            appointments. (Our first choice, due to our 48-hour cancellation
            policy and the need for timely scheduling, is to call for all
            appointment changes). Please do not email content related to your
            personal coaching sessions, as email is not completely secure or
            confidential. If you choose to communicate with us by email, be
            aware that all emails are retained in the logs of your and our
            Internet service providers. While it is unlikely that someone will
            be looking at these logs, they are, in theory, available to be read
            by the system administrator(s) of the Internet service provider.
          </li>
          <br />
          <strong>Interacting</strong>
          <li>
            Please be aware that using SMS (mobile phone text messaging) or
            messaging on Social Networking sites such as Instagram, LinkedIn,
            Twitter or Facebook is not the best way to contact us. These sites
            are not secure, and we will not read these messages in a timely
            fashion. Do not use wall postings, @replies, or other means of
            engaging with our providers in public online if we have an already
            established client/provider relationship.
          </li>
          <br />
          <strong>Conclusion</strong>
          <li>
            Thank you for taking the time to review our communication policy.
            If you have questions or concerns about any of these policies and
            procedures or regarding our potential interactions on the Internet,
            do bring them to our attention so that we can discuss them.
          </li>
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
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: '#0e5d6E',
    color: '#eab085',
    border: 'none',
    padding: '10px 10px',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '6px',
    marginTop: '10px',
    fontFamily: 'byutih',
    fontWeight: 'bold',
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
    borderRadius: '10px',
    width: '90%',
    maxWidth: '800px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    maxHeight: '90vh',
    overflow: 'hidden',
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
    maxHeight: '80vh',
    overflowY: 'auto',
    padding: '10px',
    color: 'black',
  },
};

export default Popup5;
