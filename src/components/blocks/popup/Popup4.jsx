import { useState } from 'react';
import color from 'utils/color';

// Main component
const Popup4 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      
        
        <button onClick={togglePopup} style={styles.button }>
      Terms and Conditions
        </button>
     

      {/* Use PopupModal instead of Popup to avoid name conflict */}
      <PopupModal isOpen={isPopupOpen} onClose={togglePopup}>
        <h6 className='display-5 text-center'style={{color:'black'}}> <strong>  SOWILO LLC, <br />
<p style={{fontFamily:'comorant', fontSize:'20px'}}>3705 SW 27TH ST 
APT 1011 
GAINESVILLE, FL 32608</p></strong></h6>
<i style={{color:'black'}}>-----------------------------------------------</i>
        <ul style={{color:'black', textAlign:'justify' , fontFamily:'comorant'}}>
          
     
     
 <strong>Notice of Practitioner’s Policies and Practices to Protect the Privacy of Your Health Information</strong> <br /> THIS NOTICE DESCRIBES HOW PERSONAL AND MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY. <br />  <br />I. Uses and Disclosures for Personal Coaching and Development Operations We may use or disclose your protected health information (PHI), for personal coaching and Development Operations purposes with your written authorization. To help clarify these terms, here are some definitions:
 “PHI” refers to information in your health record that could identify you.
“Personal Coaching and Development Operations.”  “Personal Coaching” is when we provide, coordinate or manage your personal development and other services related to your personal development. An example of personal coaching would be when your provider consults with another personal development provider.  “Development Operations” are activities that relate to the performance and operation of our practice. Examples of Development Operations are quality assessment and improvement activities, business-related matters such as audits and administrative services, and case management and care coordination.
“Use” applies only to activities within our office such as sharing, employing, applying, utilizing, examining, and analyzing information that identifies you.
“Disclosure” applies to activities outside of our office, such as releasing, transferring, or providing access to information about you to other parties.
“Authorization” is your written permission to disclose confidential mental health information. All authorizations to disclose must be on a specific legally required form.
 <br />
 <br />
II. Other Uses and Disclosures Requiring Authorization We may use or disclose PHI for purposes outside of personal coaching or Development Operations when your appropriate authorization is obtained. In those instances when we are asked for information for purposes outside of personal coaching or Development Operations, we will obtain an authorization from you before releasing this information. We will also need to obtain an authorization before releasing your notes. Your provider may make notes about conversation during a private, group, joint, or family counseling session, which we have kept separate from the rest of your record. These notes are given a greater degree of protection than PHI. You may revoke all such authorizations (of PHI or notes) at any time, provided each revocation is in writing. You may not revoke an authorization to the extent that we have relied on that authorization.
 <br />
 <br />
III. Uses and Disclosures without Authorization We may use or disclose PHI without your consent or authorization in the following circumstances:
Child Abuse – If your provider knows or has reasonable cause to suspect that a child has been or is in immediate danger of being a mentally or physically abused or neglected child, they must immediately report such knowledge or suspicion to the appropriate authority.
Adult and Domestic Abuse – If your provider believes that an adult is in need of protective services because of abuse or neglect by another person, they must immediately report this belief to the appropriate authorities.
Health Oversight Activities – If the Florida Board is investigating your provider or our practice, we may be required to disclose PHI to the Florida Department of Health.
Judicial and Administrative Proceedings – If you are involved in a court proceeding and a request is made for information about the professional services we provide you and/or the records thereof, such information is privileged under Florida law, and we will not release information without the written authorization of you or your legally appointed representative or a court order. The privilege does not apply when you are being evaluated for a third party or where the evaluation is court ordered. You will be informed in advance if this is the case.
Serious Threat to Health or Safety – If we believe disclosure of PHI is necessary to protect you or another individual from a substantial risk of imminent and serious physical injury, we may disclose the PHI to the appropriate individuals.
Worker’s Compensation – If we are treating you for Worker’s Compensation purposes, we must provide periodic progress reports, personal coaching records, and bills upon request to you, the Florida Office of Hearings and Adjudication, your employer, or your insurer, or their representatives.
 <br />
 <br />
IV. Patient’s Rights and Practitioner's Duties Patient’s Rights:
Right to Request Restrictions – You have the right to request restrictions on certain uses and disclosures of protected health information. However, we are not required to agree to a restriction you request.
Right to Receive Confidential Communications by Alternative Means and at Alternative Locations – You have the right to request and receive confidential communications of PHI by alternative means and at alternative locations. (For example, you may not want a family member to know that you are seeing one of our providers. On your request, we will send your bills to another address.)
Right to Inspect and Copy – You have the right to inspect or obtain a copy (or both) of PHI in our mental health and billing records used to make decisions about you for as long as the PHI is maintained in the record. Your provider may deny your access to PHI under certain circumstances, but in some cases you may have this decision reviewed. You may be denied access to notes if your provider believes that a limitation of access is necessary to protect you from a substantial risk of imminent psychological impairment or to protect you or another individual from a substantial risk of imminent and serious physical injury. 3 We shall notify you or your representative if we do not grant complete access. On your request, we will discuss with you the details of the request and denial process.
Right to Amend – You have the right to request an amendment of PHI for as long as the PHI is maintained in the record. We may deny your request. On your request, we will discuss with you the details of the amendment process.
Right to an Accounting – You generally have the right to receive an accounting of disclosures of PHI. On your request, we will discuss with you the details of the accounting process.
Right to a Paper Copy – You have the right to obtain a paper copy of this notice upon request, even if you have agreed to receive the notice electronically.
 <br />
 <br />
Practitioner’s Duties:
Your provider is required by law to maintain the privacy of PHI and to provide you with a notice of his/her legal duties and privacy practices with respect to PHI.
We reserve the right to change the privacy policies and practices described in this notice. Unless we notify you of such changes, however, we are required to abide by the terms currently in effect.
If the Practitioner intends to revise their policies and procedures, they must describe in the notice to patients how the Practitioner will provide patients with a revised notice of privacy policies and procedures (e.g., by mail, e-mail).
 <br />
 <br />
V. Questions and Complaints If you have questions about this notice, disagree with a decision your provider makes about access to your records, or have other concerns about your privacy rights, you may contact them at the above contact information. If you believe that your privacy rights have been violated and wish to file a complaint with, you may send your written complaint to the above contact address. You may also send a written complaint to the Secretary of the U.S. Department of Health and Human Services. We can provide you with the appropriate address upon request. You have specific rights under the Privacy Rule. We will not retaliate against you for exercising your right to file a complaint.
 <br />
VI. Effective Date, Restrictions and Changes to Privacy Policy We reserve the right to change the terms of this notice and to make the new notice provisions effective for all PHI that we maintain. We will provide you with a revised notice and will welcome discussion of any revisions
.
       
          
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
    width: '60%',
    maxWidth: '800px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    maxHeight: '80vh', // Restrict height to 80% of the viewport
    overflow: 'hidden', // Prevents content from spilling out
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
    maxHeight: 'calc(80vh - 40px)', // Makes sure content height respects popup padding
    overflowY: 'auto', // Enables scrolling for content if it overflows
    paddingRight: '10px', // Adds padding for scrollbar
    color: 'white',
  },
  button: {
    color: '#eab085',
    backgroundColor: '#0e5d6E',
    border: 'none',
    padding: '10px 10px',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
    fontFamily: 'byutih',
    fontWeight: 'bold',
  },
};


export default Popup4;
