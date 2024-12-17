const CTA6 = () => {
  return <div className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map" style={{
    backgroundImage: 'url(/img/photos/eng.jpg)',
    
  }}> 
  <h1 className="display-1 mb-1 align-center " style={{color:'white', fontFamily:'Sinclaire'}}> <i className="icn-flower text-white fs-30 opacity-50" /> Enrollment Section <i className="icn-flower text-white fs-30 opacity-50" /></h1>
      <div className="container py-md-17 py-lg-18 d-flex justify-content-center align-items-center" style={{ backgroundColor: "" }}>
  <div 
    className="text-center p-5 rounded" 
    style={{
      maxWidth: "600px",
      backgroundColor: "#fff",
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      borderRadius: "10px",
    }}
  ><i className="icn-flower text-black fs-30 opacity-50" />
    <h2 
      className=" fw-bold mb-4" 
      style={{
        fontFamily: "EditorsNote",
        fontSize: "2rem",
        color: "#333",
        letterSpacing: "1px",
      }}
    >
  CLARITY
    </h2>
    <p 
      className="mb-4"
      style={{
        fontFamily: "Cormorant",
        fontSize: "1rem",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      Gain a clear understanding of who you are, what you offer, who you best serve, and the deeper purpose behind it.
    </p>

    <h3 
      className="fw-bold mt-5 mb-4" 
      style={{
        fontFamily: "EditorsNote",
        fontSize: "1.8rem",
        color: "#333",
      }}
    >
      CONNECTION
    </h3>
    <p 
      className="mb-4"
      style={{
        fontFamily: "Cormorant",
        fontSize: "1rem",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      Truly understand your clients—their challenges and aspirations—so you can forge a meaningful bond where they feel seen, heard, and understood.
    </p>

    <h3 
      className="fw-bold mt-5 mb-4" 
      style={{
        fontFamily: "EditorsNote",
        fontSize: "1.8rem",
        color: "#333",
      }}
    >
      TRANSFORMATION
    </h3>
    <p 
      className="mb-4"
      style={{
        fontFamily: "Cormorant",
        fontSize: "1rem",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      Use the transformative power of life to inspire renewal, growth, and balance. Support individuals in embracing their unique path to self-discovery and growth.
    </p>

    <button 
      className="btn text-white rounded-pill" 
      style={{
        backgroundColor: "#b68d60",
        padding: "10px 20px",
        fontSize: "1rem",
        letterSpacing: "1px",
        fontWeight: "600",
      }}
    >
      SIGN ME UP!
    </button>
  </div>
</div>

    </div>;
};

export default CTA6;