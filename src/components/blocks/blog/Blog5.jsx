import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import "plyr-react/plyr.css";

// Dynamically import Plyr with ssr: false to disable SSR (Server-Side Rendering)
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

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
    backgroundColor: " #FFFBF4",
    padding: "70px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }}
>
  <h1 className="display-2"style={{fontFamily:'byutih'}}>  Course Testimonials</h1>

  {/* Updated box width and padding */}
  <div className="text-center" style={{ width: "90%", maxWidth: "1100px", backgroundColor: "#fff", padding: "60px" }}>
    <h2 style={{ color: "#333", marginBottom: "28px", fontFamily:'Cormorant', fontSize:'24px' }}>
  "What they're saying about the course"
  </h2>
    <div key={currentIndex}> {/* Key forces re-render */}
      {/* Updated Plyr wrapper with a larger video size */}
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
        style={{
          width: "90%",
          maxHeight: "600px", // Set a maximum height for the video
        }}
      />
    </div>

    {/* Buttons */}
    <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
      {/* Smaller Previous Button */}
      <button
        onClick={handlePrev}
        style={{
          background: "#eab085",
          color: "#fff",
          padding: "10px 15px",
          fontSize: "14px",
          border: "none",
          borderRadius: "4px",
          fontFamily:'cormorant'
        }}
      >
        Prev
      </button>

      {/* Regular-sized Next Button */}
      <button
        onClick={handleNext}
        style={{
          background: " #eab085",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "4px",
          fontFamily:'cormorant'
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
