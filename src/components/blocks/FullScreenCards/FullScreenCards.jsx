import React from 'react';
import { Popup } from '../popup';

const FullScreenCards = () => {
    const sectionStyles = {
        wrapper: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto',
            gap: '20px',
            fontFamily: 'Cormorant',
            overflow: 'hidden',
        },
        contentSection: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: '#d4e3df',
            height: '400px', // Uniform height for all sections
            boxSizing: 'border-box',
        },
        image: {
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            objectPosition: 'center',
        },
        heading: {
            color: '#55B9A6',
            fontSize: '1.5rem', // Adjusted for responsive font sizes
            letterSpacing: '2px',
            marginBottom: '1rem',
            fontFamily: 'sinclair',
        },
        subHeading: {
            fontSize: '1rem', // Adjusted for smaller font sizes
            fontWeight: '700',
            marginBottom: '1rem',
        },
        text: {
            color: '#444',
            fontSize: '0.8rem', // Smaller font size for responsive views
            marginBottom: '1.5rem',
        },
        list: {
            listStyle: 'none',
            padding: '0',
            color: '#444',
            fontSize: '0.7rem', // Smaller list font size
        },
        listItem: {
            marginBottom: '0.5rem',
        },
        listIcon: {
            color: '#cda67e',
        },
        backgroundImage: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
        },
    };

    // Add responsive styles using a media query
    const responsiveStyles = `
        @media (max-width: 768px) {
            .wrapper {
                grid-template-columns: 1fr; /* Single-column layout for small screens */
            }
            .content-section {
                padding: 1rem; /* Reduced padding for smaller screens */
            }
            .heading {
                font-size: 1.2rem; /* Smaller heading size for small screens */
            }
            .sub-heading {
                font-size: 0.9rem; /* Smaller subheading size */
            }
            .text, .list {
                font-size: 0.7rem; /* Smaller font sizes for text and lists */
            }
        }
    `;

    return (
        <section>
            {/* Inject responsive styles */}
            <style>{responsiveStyles}</style>

            <div style={sectionStyles.wrapper}>
                {/* Section 1 */}
                <div style={sectionStyles.contentSection}>
                    <h4 style={sectionStyles.heading}>Foundation Training:</h4>
                    <h2 style={sectionStyles.subHeading}>
                        The Foundation Training is a comprehensive one-year introductory program in the Bodynamic System.
                    </h2>
                    <p style={sectionStyles.text}>
                        This foundational course explores character structures, character positions, and the fundamental concepts underlying contact and communication within the system.
                    </p>
                    <ul style={sectionStyles.list}>
                        <li style={sectionStyles.listItem}>
                            <span style={sectionStyles.listIcon}>➤</span> The training provides a detailed analysis of childhood developmental phases, highlighting central developmental challenges.
                        </li>
                        <li>
                            <span style={sectionStyles.listIcon}>➤</span> Through this program, you will refine your professional skills, cultivating greater presence and effectiveness in your work.
                        </li>
                    </ul>
                    <Popup />
                </div>
                <img src="/img/photos/section1.jpg" alt="section image" style={sectionStyles.image} />

                {/* Section 2 */}
                <div
                    style={{
                        ...sectionStyles.backgroundImage,
                        backgroundImage: 'url("/img/photos/section2b.jpg")',
                    }}
                ></div>
                <div style={sectionStyles.contentSection}>
                    <h4 style={sectionStyles.heading}>What will we cover in this training?</h4>
                    <h2 style={sectionStyles.subHeading}>
                        This 20-day training, divided into four modules, offers a comprehensive exploration of the psychological and physiological development and their interconnection.
                    </h2>
                    <p style={sectionStyles.text}>
                        The program will help you understand how your character shapes your body and uncover the roots of your unique preferences and biases.
                    </p>
                    <ul style={sectionStyles.list}>
                        <li style={sectionStyles.listItem}>
                            <span style={sectionStyles.listIcon}>➤</span> Introduction to various Bodynamic techniques designed to support behavioral change across all age groups.
                        </li>
                        <li>
                            <span style={sectionStyles.listIcon}>➤</span> Includes the Bodyknot technique—a practical tool for maintaining dignity and mutual connection in challenging situations.
                        </li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div style={sectionStyles.contentSection}>
                    <h4 style={sectionStyles.heading}>Why should I take Bodynamic training?</h4>
                    <h2 style={sectionStyles.subHeading}>
                        The Bodynamic System emphasizes the profound connection between the body, psychology, and human development from inception.
                    </h2>
                    <p style={sectionStyles.text}>
                        As one of the first schools to holistically integrate the body, brain, and behavior, it offers tools and techniques to enhance self-awareness and understanding of others.
                    </p>
                    <ul style={sectionStyles.list}>
                        <li style={sectionStyles.listItem}>
                            <span style={sectionStyles.listIcon}>➤</span> Exceptional range of tools to enhance self-awareness and deepen understanding of others.
                        </li>
                        <li>
                            <span style={sectionStyles.listIcon}>➤</span> Makes psychological progress measurable, benefiting both personal growth and professional practice.
                        </li>
                    </ul>
                </div>
                <img src="/img/photos/section3.jpg" alt="section image" style={sectionStyles.image} />

                {/* Section 4 */}
                <div
                    style={{
                        ...sectionStyles.backgroundImage,
                        backgroundImage: 'url("/img/photos/section4.jpg")',
                    }}
                ></div>
                <div style={sectionStyles.contentSection}>
                    <h4 style={sectionStyles.heading}>Who is this training for?</h4>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '20px',
                        }}
                    >
                        <ul style={sectionStyles.list}>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Therapists
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Mental Health Counsellors
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Doctors
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Physiotherapists
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Massage Therapists
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Yoga teachers
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Dance teachers
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Trainers
                            </li>
                        </ul>
                        <ul style={sectionStyles.list}>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Salespeople
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Psychiatrists
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Osteopaths
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Naturopaths
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Social workers
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Cranio-sacral specialists
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Pedagogues
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Teachers
                            </li>
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> And of course, parents!
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FullScreenCards;
