import React, { useState, useEffect } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of videos
  const slides = [
    {
      type: "video",
      videoSrc: "https://vimeo.com/469964414",
      options: { autoplay: true, muted: true }
    },
    {
      type: "video",
      videoSrc: "https://vimeo.com/276290101",
      options: { autoplay: true, muted: true }
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Cleanup Plyr to avoid DOM issues
  useEffect(() => {
    return () => {
      const plyrInstances = document.querySelectorAll(".plyr");
      plyrInstances.forEach((player) => player.plyr && player.plyr.destroy());
    };
  }, [currentIndex]);

  return (
    <section
      style={{
        backgroundColor: "#9FC3C6",
        padding: "0px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%", // Full-width section
        minHeight: "100vh", // Full screen height
      }}
    >
      <h1 className='display-1 text-center' style={{ fontFamily: 'EditorsNote'   }}>What they're saying about the course</h1>

      <div
        style={{
          width: "50%", // Take 90% of the screen width
          maxWidth: "1200px", // Restrict max width to 1200px
          backgroundColor: "#fff",
          padding: "20px", // Adjust padding
          borderRadius: "8px", // Add border-radius for styling
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
        }}
      >
        <div key={currentIndex} style={{ width: "100%", height: "auto" }}>
          <Plyr
            key={currentIndex}
            source={{
              type: "video",
              sources: [
                {
                  src: slides[currentIndex]?.videoSrc,
                  provider: "vimeo"
                }
              ]
            }}
            options={{
              autoplay: slides[currentIndex]?.options?.autoplay || false,
              muted: slides[currentIndex]?.options?.muted || false
            }}
          />
        </div>

        {/* Buttons */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Smaller Previous Button */}
          <button
            onClick={handlePrev}
            style={{
              background: "#00B3A6",
              color: "#fff",
              padding: "5px 10px",
              fontSize: "12px",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Prev
          </button>

          {/* Regular-sized Next Button */}
          <button
            onClick={handleNext}
            style={{
              background: "#00B3A6",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
