import React from 'react';
import { Popup } from '../popup';

const FullScreenCards = () => {
    const sectionStyles = {
        wrapper: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0', // Remove spacing between sections
            fontFamily: 'Cormorant',
            overflow: 'hidden',
        },
        contentSection: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: '#DAEAED',
            minHeight: '400px',
            boxSizing: 'border-box',
            margin: '0', // Remove margin
        },
        image: {
            width: '100%',
            height: '510px',
            objectFit: 'cover',
            objectPosition: 'center',
            margin: '0', // Remove margin
            padding: '0', // Remove padding
        },
        heading: {
            color: ' #0e5d6E',
            fontSize: 'clamp(24px, 2.5vw, 32px)',
            letterSpacing: '1px',
            fontFamily: 'sinclair',
            marginBottom: '1rem',
        },
        subHeading: {
            fontSize: 'clamp(18px, 2vw, 24px)',
            fontWeight: '700',
            marginBottom: '1rem',
        },
        text: {
            color: '#444',
            fontSize: 'clamp(14px, 1.5vw, 20px)',
            marginBottom: '1.1rem',
        },
        list: {
            listStyle: 'none',
            padding: '0',
            margin: '0', // Remove margin
            color: '#444',
            fontSize: 'clamp(12px, 1.2vw, 20px)',
            fontSize:'20px'
        },
        listItem: {
            marginBottom: '0.5rem',
        },
        listIcon: {
            color: '#eab085',
        },
        backgroundImage: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
            margin: '0', // Remove margin
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
                    <h4 style={sectionStyles.heading}>The Foundation Training - </h4>
                    <h2 style={sectionStyles.subHeading}>
                    Discover the Power of the Bodynamic System
                    </h2>
                    <p style={sectionStyles.text}>
                    The 20-day Foundation Training, divided into four modules, is a comprehensive introduction to the Bodynamic System—a pioneering approach that connects psychology, physiology, and human development.
                    </p>
                   <p style={sectionStyles.text}>This course explores character structures, positions, childhood developmental stages, and the interplay between body and behavior. You’ll also explore the fundamental concepts of communication, such as mutual connection, dignity, boundaries, centering, and grounding while sharpening your professional skills to cultivate greater presence and depth in your work</p>
                    <Popup />
                </div>
                <img src="/img/photos/section1.jpg" alt="section image" style={sectionStyles.image} />

                {/* Section 2 */}
                <div
                    style={{
                        ...sectionStyles.backgroundImage,
                        backgroundImage: 'url("/img/photos/medium-shot-people-learning-together-office.jpg")',
                    }}
                ></div>
                <div style={sectionStyles.contentSection}>
                    <h4 style={sectionStyles.heading}>What will we cover in this training?</h4>
                    <p style={sectionStyles.text}>
                    This training delves into psychological and physiological development, focusing on character structure formation and its impact on the body. You'll explore the origins of your preferences, biases, and defenses, understanding their benefits and challenges.
                    </p>
                    <p style={sectionStyles.text}>
                    The training offers Bodynamic techniques that support behavioral change for all ages and refine your ability to analyze the physiological body in psychological terms. By developing this skill set, you’ll gain fresh perspectives on engaging with others effectively and choosing actions that foster meaningful interactions.
                    </p >
                    <p style={sectionStyles.text}>Additionally, you’ll learn the short version of the Bodyknot technique—a practical tool for maintaining dignity and mutual connection in difficult situations. This approach aids conflict resolution and strengthens the observing ego, promoting self-awareness and relational harmony. </p>
                </div>

                {/* Section 3 */}
                <div style={sectionStyles.contentSection}>
                    <h4 style={sectionStyles.heading}>Why should I take Bodynamic training?</h4>
                    <p style={sectionStyles.text}>
                    The Bodynamic System, with over 40 years of research and development, is a Somatic Developmental Psychology system—a groundbreaking paradigm of empirically researched psychology focusing on practical application. What truly makes this system unique is its distinctive ability to make psychological processes measurableom inception.
                    </p>
                    <p style={sectionStyles.text}>
                    With a global reach, Bodynamic International offers comprehensive training programs, empowering individuals and professionals worldwide to deepen their understanding of embodiment, self-awareness, and interpersonal dynamics.
                    </p>
                    
                </div>
                <img src="/img/photos/worldwide-6064090_1280.jpg" alt="section image" style={sectionStyles.image} />

                {/* Section 4 */}
                <div
                    style={{
                        ...sectionStyles.backgroundImage,
                        backgroundImage: 'url("/img/photos/section.4.jpg")',
                    }}
                ></div>
                <div style={sectionStyles.contentSection}>
                    <h4 style={sectionStyles.heading}>Who is this training for?</h4>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'left',
                            gap: '100px',
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
                            <li>
                                <span style={sectionStyles.listIcon}>➤</span> Salespeople
                            </li>
                        </ul>
                        <ul style={sectionStyles.list}>
                           
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
