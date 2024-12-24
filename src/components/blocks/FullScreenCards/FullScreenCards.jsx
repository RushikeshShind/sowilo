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
            {/* Header Main Image */}
            <div
                style={{
                    gridColumn: '1 / -1',
                    textAlign: 'center',
                }}
            >
                <img
                    className=''
                    src='/img/photos/B-Logo5-SMALL.png'
                    alt='hello'
                    style={{
                        width: '100%', // Makes the image span the full width of the container
                        height: 'auto',
                        margin: 0, // Removes any margin
                        display: 'block', // Removes inline spacing
                    }}
                />
                <h2 className="display-2 mb-5 text-dark" style={{ fontFamily: 'EditorsNote', fontWeight: 300 }}>
            Bodynamic Foundation Training <br />Orlando, USA</h2>
          <a
            href="https://www.bodynamic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link">
            <h6 style={{ textDecoration: 'underline', color:'#009990' }}>Bodynamic International</h6>
          </a>
            </div>


            {/* Foundation Training Section */}
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
                    fontSize: '1.8rem',
                    letterSpacing: '2px',
                    marginBottom: '1rem',
                    fontFamily: 'Sinclaire'
                }}>Foundation Training:</h4>
                <h2 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    fontFamily: 'Cormorant'
                }}>
                    The Foundation Training is a comprehensive one-year introductory program in the Bodynamic System.
                </h2>
                <p style={{
                    fontFamily: 'Cormorant',
                    color: '#444',
                    fontSize: '1rem',
                    marginBottom: '1.5rem',
                }}>
                    This foundational course explores character structures, character positions, and the fundamental concepts underlying contact and communication within the system. These concepts include mutual connection, dignity, boundaries, centering, and grounding.
                </p>
                <ul style={{ listStyle: 'none', padding: '0', color: '#444', fontSize: '1rem', fontFamily: 'Cormorant' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                     <span style={{ color: '#cda67e' }}>➤</span> The training provides a detailed analysis of childhood developmental phases, highlighting central developmental challenges and their connection to emerging defense mechanisms.
                    </li>
                    <li>
                    <span style={{ color: '#cda67e' }}>➤</span> Through this program, you will refine your professional skills, cultivating greater presence, depth, and effectiveness in your work.
                    </li>
                </ul>
                
            </div>

            <div style={{
                backgroundImage: 'url("/img/photos/bg39.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
            }}></div>

            {/* Empowered Email Marketing Section */}
            <div style={{
                backgroundImage: 'url("/img/photos/section2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '200px',
            }}></div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2rem',
                backgroundColor: '#d4e3df',
                minHeight: '400px',
            }}>
                <h4 style={{
                    color: '#55B9A6',
                    fontSize: '1.8rem',
                    letterSpacing: '2px',
                    marginBottom: '1rem',
                    fontFamily: 'Sinclaire'
                }}>What will we cover in this training?</h4>
                <h2 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    fontFamily: 'Cormorant'
                }}>
                    This 20-day training, divided into four modules, offers a comprehensive exploration of the psychological and physiological development and their interconnection. Through engaging lectures, you will gain insights into the formation of character and its associated defense mechanisms.
                </h2>
                <p style={{
                    
                    fontFamily: 'Cormorant',
                    color: '#444',
                    fontSize: '0.8rem',
                    marginBottom: '1.5rem',
                }}>
                    The program will help you understand how your character shapes your body, influencing its physiological appearance, and uncover the roots of your unique preferences and biases. Together, we will examine how these tendencies have served you and where they may present challenges in your life.
                </p>
                <ul style={{ listStyle: 'none', padding: '0', color: '#444', fontSize: '0.8rem', fontFamily: 'Cormorant' }}>
                    <li style={{ marginBottom: '0.4rem' }}>
                    <span style={{ color: '#cda67e' }}>➤</span> You will also be introduced to various Bodynamic techniques designed to support behavioral change, applicable across all age groups, including children. These techniques will enhance your ability to read the physiological body and interpret it psychologically by identifying areas of strength and those needing attention. This skill set will offer fresh perspectives on how to engage effectively with others and determine the most supportive actions in any interaction.
                    </li>
                    <li>
                    <span style={{ color: '#cda67e' }}>➤</span>Additionally, the training includes the short version of the Bodyknot technique—a practical tool for maintaining dignity and mutual connection in challenging situations. This technique supports conflict resolution and the development of an observing ego, fostering greater self-awareness and relational harmony.
                    </li>
                </ul>
                
            </div>

            {/* Section 3 */}

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
                    fontSize: '1.8rem',
                    letterSpacing: '2px',
                    marginBottom: '1rem',
                    fontFamily: 'Sinclaire'
                }}>Why should I take Bodynamic training?</h4>
                <h2 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    fontFamily: 'Cormorant'
                }}>
                    The Bodynamic System, with over 40 years of research and development, is a pioneering approach that emphasizes the profound connection between the body, psychology, and human development from inception.
                </h2>
                <p style={{
                    fontFamily: 'Cormorant',
                    color: '#444',
                    fontSize: '1rem',
                    marginBottom: '1.5rem',
                }}>
                    As one of the first schools to holistically integrate the body, brain, and behavior, it offers a comprehensive framework for understanding the interplay between these elements.
                </p>
                <ul style={{ listStyle: 'none', padding: '0', color: '#444', fontSize: '1rem', fontFamily: 'Cormorant' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cda67e' }}>➤</span> The system provides an exceptional range of tools and techniques to enhance self-awareness and deepen understanding of others.
                    </li>
                    <li>
                    <span style={{ color: '#cda67e' }}>➤</span> What sets Bodynamic apart is its unique ability to make psychological progress measurable, delivering a practical and accessible methodology that benefits both personal growth and professional practice.
                    </li>
                </ul>
                
            </div>

            <div style={{
                backgroundImage: 'url("/img/photos/section3.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
            }}></div>
            {/* Section 4 */}
            <div style={{
                backgroundImage: 'url("/img/photos/section.4.jpg")',
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
            }}><h4 style={{
                color: '#55B9A6',
                fontSize: '1.8rem',
                letterSpacing: '2px',
                marginBottom: '1rem',
                fontFamily: 'Sinclaire'
            }}>Who is this training for?</h4>
                
                <div
              className="list-container"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 'px', // Adjust the gap between the two lists if needed
              }}
            >
              <ul className=" text-left"style={{ listStyleType: 'none', paddingLeft: '10px', }}>
                <li><span style={{ color: '#cda67e' }}>✔</span>  Therapists</li>
                <li><span style={{ color: '#cda67e' }}>✔</span> Mental Health Counsellors</li>
                <li><span style={{ color: '#cda67e' }}>✔</span> Doctors</li>
                <li><span style={{ color: '#cda67e' }}>✔</span> Physiotherapists</li>
                <li><span style={{ color: '#cda67e' }}>✔</span> Massage Therapists</li>
                <li><span style={{ color: '#cda67e' }}>✔</span> Yoga teachers</li>
                <li><span style={{ color: '#cda67e' }}>✔</span>  Dance teachers</li>
                <li><span style={{ color: '#cda67e' }}>✔</span> Trainers</li>
                <li><span style={{ color: '#cda67e' }}>✔</span> Sales people</li>
              </ul>
              <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
              <li><span style={{ color: '#cda67e' }}>✔</span> Psychiatrists</li>
              <li><span style={{ color: '#cda67e' }}>✔</span> Osteopaths</li>
              <li><span style={{ color: '#cda67e' }}>✔</span> Naturopaths</li>
              <li><span style={{ color: '#cda67e' }}>✔</span> Social workers</li>
              <li><span style={{ color: '#cda67e' }}>✔</span> Cranio-sacral specialists</li>
              <li><span style={{ color: '#cda67e' }}>✔</span> Pedagogues</li>
              <li><span style={{ color: '#cda67e' }}>✔</span> Teachers</li>
              <li><span style={{ color: '#cda67e' }}>✔</span> And of course parents!</li>
              </ul>
            </div>
                
                
            </div>
            
        </div>
        
    );
};

export default FullScreenCards;
