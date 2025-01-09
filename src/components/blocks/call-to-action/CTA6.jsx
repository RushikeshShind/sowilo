const CTA6 = () => {
  return <div className="wrapper bg-auto no-overlay bg-image text-center" style={{ 
    backgroundImage: 'url(/img/waters-3102729_1280.jpg)', height:'auto',
    
  }}> 
<div>  <h1 className="display-2"
      style={{
        fontFamily: 'sinclair',
        color:'rgb(37, 216, 204)',
        border:'2px'
      }}
    ><br />
      Enrollment Section
    </h1></div>
      <div className="container py-md-17 py-lg-18 d-flex justify-content-center align-items-center" style={{ backgroundColor: "" }}>
        
  <div 
    className="text-center p-5 rounded" 
    style={{
      maxWidth: "800px",
      backgroundColor: "#fff",
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      borderRadius: "10px",
    }}
  > 
    <h2 
      className=" fw-bold mb-1" 
      style={{
        fontFamily: "sinclair",
        fontSize: "28px",
        color: "#333",
        
      }}
    >
  CLARITY
    </h2>
    <p 
      className="mb-2"
      style={{
        fontFamily: "Cormorant",
        fontSize: "20px",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      Gain a clear understanding of who you are, what you offer, who you best serve, and the deeper purpose behind it.
    </p>

    <h3 
      className="fw-bold mt-5 mb-4" 
      style={{
        fontFamily: "sinclair",
        fontSize: "28px",
        color: "#333",
      }}
    >
      CONNECTION
    </h3>
    <p 
      className="mb-4"
      style={{
        fontFamily: "Cormorant",
        fontSize: "20px",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      Truly understand your clients—their challenges and aspirations—so you can forge a meaningful bond where they feel seen, heard, and understood.
    </p>

    <h3 
      className="fw-bold mt-5 mb-4" 
      style={{
        fontFamily: "sinclair",
        fontSize: "28px",
        color: "#333",
      }}
    >
      TRANSFORMATION
    </h3>
    <p 
      className="mb-4"
      style={{
        fontFamily: "Cormorant",
        fontSize: "20px",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      Use the transformative power of life to inspire renewal, growth, and balance. Support individuals in embracing their unique path to self-discovery and growth.
    </p>

    <button 
      className="btn text-white " 
      style={{
        backgroundColor: " #eab085",
        padding: "10px 20px",
        fontSize: "20px",
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