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

  const [isSubmitted, setIsSubmitted] = useState(false); // To show the thank you message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_xf4ir8d";
    const confirmTemplateID = "template_0m2agjk";
    const userID = "gkHe0DL-JzXd3GVfY";

    // Validate email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Confirmation Email Data
    const confirmationEmailData = {
        to_email: formData.email, // Matches {to_email} in the template
        participant_name: formData.fullName, // Matches {participant_name} in the template
    };

    // Send confirmation email
    emailjs.send(serviceID, confirmTemplateID, confirmationEmailData, userID)
        .then(
            (result) => {
                console.log("Confirmation Email Sent Successfully:", result.text);
                setIsSubmitted(true);
            },
            (error) => {
                console.error("Error sending confirmation email:", error.text);
                alert("Failed to send confirmation email. Please try again.");
            }
        );
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