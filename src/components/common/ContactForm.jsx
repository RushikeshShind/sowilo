import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    referral: "",
    reason: "",
    bodynamicTherapist: "",
    additionalNote: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
  
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
  
    try {
      const serviceID = "service_xf4ir8d";
      const userID = "gkHe0DL-JzXd3GVfY"; // Your EmailJS Public Key
      const templateToSelf = "template_m90q7lf"; // Sends data to YOU
      const templateToUser = "template_0m2agjk"; // Auto-response to user
  
      // Step 1: Send user details to yourself (Rushikesh)
      await emailjs.send(serviceID, templateToSelf, {
        fullName: formData.fullName,  
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
        referral: formData.referral,
        reason: formData.reason,
        bodynamicTherapist: formData.bodynamicTherapist,
        additionalNote: formData.additionalNote,
        to_email: "connect@sowilosoul.com" // Your email
      }, userID);
  
      // Step 2: Send confirmation email to the user
      await emailjs.send(serviceID, templateToUser, {
        fullName: formData.fullName,
        email: formData.email,
        reply_to: "connect@sowilosoul.com", // Your email (reply-to)
        to_email: formData.email // User's email (recipient)
      }, userID);
  
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage("Failed to send the email. Please try again.");
      console.error("Error sending email:", error);
    }
  };
  
  

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}
    >
      <h1
        className="display-2 text-center"
        style={{ fontFamily: "byutih", color: "#eab085" }}
      >
        Registration Form
      </h1>

      <label
        style={{
          color: "black",
          marginBottom: "10px",
          fontSize: "20px",
          fontFamily: "cormorant",
        }}
      >
        Full name <span style={{ color: "black" }}>*</span>
      </label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"
        }}
      />

      <label
        style={{ color: "black", display: "block", marginBottom: "10px", fontFamily: "cormorant" }}
      >
        Email Address <span style={{ color: "black" }}>*</span>
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"
        }}
      />

      <label
        style={{ color: "black", display: "block", marginBottom: "10px" , fontFamily: "cormorant" }}
      >
        Name of your Company <span style={{ color: "black" }}>*</span>
      </label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"
        }}
      />

      <label
        style={{ color: "black", display: "block", marginBottom: "10px", fontFamily: "cormorant" }}
      >
        What industry are you in? <span style={{ color: "black" }}>*</span>
      </label>
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"
        }}
      />

      <label
        style={{ color: "black", display: "block", marginBottom: "10px", fontFamily: "cormorant" }}
      >
        How did you hear about Bodynamic International?{" "}
        <span style={{ color: "black" }}>*</span>
      </label>
      <input
        type="text"
        name="referral"
        value={formData.referral}
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"
        }}
      />

      <label
        style={{ color: "black", display: "block", marginBottom: "10px", fontFamily: "cormorant" }}
      >
        What brings you to the training? <span style={{ color: "black" }}>*</span>
      </label>
      <input
        type="text"
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"
        }}
      />

      <label
        style={{ color: "black", display: "block", marginBottom: "10px", fontFamily: "cormorant" }}
      >
        Do you see yourself as a Bodynamic Therapist in the near future?{" "}
        <span style={{ color: "black" }}>*</span>
      </label>
      <input
        type="text"
        name="bodynamicTherapist"
        value={formData.bodynamicTherapist}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"
        }}
      />

      <label
        style={{ color: "black", display: "block", marginBottom: "10px", fontFamily: "cormorant" }}
      >
        Additional Note <span style={{ color: "black" }}>*</span>
      </label>
      <input
        type="text"
        name="additionalNote"
        value={formData.additionalNote}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"
        }}
      />

      <button
        type="submit"
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          backgroundColor: "#eab085",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        Submit
      </button>
       {isSubmitted && (
        <p style={{ color: "green", marginTop: "20px", fontFamily: "cormorant" }}>
          Thank you for your submission! A confirmation email has been sent to your email address.
        </p>
      )}
    </form>
  );
};

export default ContactForm;