import React, { useState } from "react";

function InstructorCards() {
  const [isFlipped, setIsFlipped] = useState({});

  const handleFlip = (index) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const instructors = [
    {
      id: 1,
      name: "Mar Barroso",
      image: "/img/photos/Mar-Barroso.webp",
      contact: "@ www.somatic.pt e. info@somatic.pt m. +351915680076",
      info: `Mar Barroso has a master’s degree in clinical and health psychology, a bachelor’s in psychology, and a bachelor’s in human resources with an associate in training management.

She has more than 13 years of experience in clinical practice. Mar is a Bodynamic® educational therapist and part of the international training team of Bodynamic International®. She teaches Foundation Training, Practitioner Training, and Shock Trauma Training in Portugal, Spain, and Turkey.

Mar is the founder and CEO of SOMATIC School of Body Psychotherapies (est. 2014), the senior assistant and official representative for Somatic Experiencing® in Portugal, and the Trainer for Bodynamic International® in Portugal and Spain, with more than 600 enrolled students. She is also an assistant teacher with Ditte Marcher for shock trauma.

Additionally, she is trained in other areas, such as Cognitive Behavioral Therapy (CBT), Children's Shock Trauma with Maggie Klein, Developing Trauma and Somatic Experiencing with Peter Levine, Clinical Case Studies with Stephen Porges, Spirituality, and Reorienting Birth with Lisbeth Marcher.

She lives in Portugal, is married, and is the mother of two amazing teenagers. She loves people, nature, and dancing.`,
    },
    {
      id: 2,
      name: "James Nicholas",
      image: "/img/James-Nicholas.png",
      contact: "James@Bodynamic.com",
      info: `James Nicholas is a certified Bodynamic® therapist and Bodynamic® analyst serving Southern California and is one of the North American training coordinators for Bodynamic® International. He is an attorney and member in good standing of the California Bar and an associate clinical social worker licensed in California. He received his B.A. in philosophy and history from UCLA, J.D. from Northwestern University, and M.S.W. from USC.

James has a background in massage therapy, Chua Ka, Tai Chi, cranial-sacral techniques, and bodywork. His focus areas include individual therapy, trauma, attachment, couples counseling, mediation/conflict resolution, and family systems. He also specializes in bodymapping (conducting and reading). In addition to private practice, James works as an associate clinician at the USC Center for Work and Family Life. He lives in San Diego with his wife and 7-year-old son.`,
    },
  ];

  return (
    <section
      style={{
        background: " #DAEAED ",
        padding: "50px",
        fontFamily: "Cormorant",
        height: "auto",
      }}
    >
      <h1
        className="text-center display-2 mb-12"
        style={{ color: "#0e5d6E", fontFamily: "byutih" }}
      >
        TRAINERS
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          justifyItems: "center",
        }}
      >
        {instructors.map((instructor, index) => (
          <div
            key={instructor.id}
            onClick={() => handleFlip(index)}
            style={{
              width: "350px",
              height: "500px",
              perspective: "1000px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transition: "transform 0.6s",
                transformStyle: "preserve-3d",
                transform: isFlipped[index] ? "rotateY(180deg)" : "none",
              }}
            >
              {/* Front Side */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  backgroundColor: "#ffffff",
                  borderRadius: "15px",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "15px",
                    objectFit: "cover",
                    height: "500px",
                  }}
                />
                <h2
                  style={{
                    fontSize: "28px",
                    color: "#0e5d6E",
                    marginBottom: "10px",
                    fontFamily: "byutih",
                  }}
                >
                  {instructor.name}
                </h2>
               
              </div>

              {/* Back Side */}
              <div
  style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#f9f9f9",
    borderRadius: "15px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Start from the top
    transform: "rotateY(180deg)",
    padding: "20px",
    textAlign: "center",
    overflow: "auto", // Allow scrolling if content overflows
    boxSizing: "border-box", // Ensure padding is included in height
  }}
>
<p style={{ fontSize: "20px", color: "#555555" }}>
                 
                </p>
                <p style={{ fontSize: "20px", color: "#555555" }}>
                  {instructor.info}
                 <br /><strong>Contact:</strong> 
                  {instructor.contact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstructorCards;