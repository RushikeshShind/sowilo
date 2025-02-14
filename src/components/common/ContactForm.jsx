import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    otherIndustry: "",
    referralSource: "",
    referralName: "",
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
      const serviceID = "service_tj4iznk";
      const userID = "gkHe0DL-JzXd3GVfY";
      const templateToSelf = "template_djjbdkk";
      const templateToUser = "template_anw7y4j";

      // Process industry data
      const industryValue = formData.industry === "Others" 
        ? formData.otherIndustry 
        : formData.industry;

      // Process referral data
      const referralValue = formData.referralSource === "Referral"
        ? `Referral from: ${formData.referralName}`
        : formData.referralSource;

      await emailjs.send(serviceID, templateToSelf, {
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        industry: industryValue,
        referral: referralValue,
        reason: formData.reason,
        bodynamicTherapist: formData.bodynamicTherapist,
        additionalNote: formData.additionalNote,
        to_email: "connect@sowilosoul.com"
      }, userID);

      await emailjs.send(serviceID, templateToUser, {
        fullName: formData.fullName,
        email: formData.email,
        reply_to: "connect@sowilosoul.com",
        to_email: formData.email
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

<label style={{color: "black", display: "block", marginBottom: "10px", fontFamily: "cormorant"}}>
        Name of your company (if applicable)
      </label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        style={{width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"}}
      />

      <label style={{color: "black", display: "block", marginBottom: "10px", fontFamily: "cormorant"}}>
        What industry are you in? *
      </label>
      <select
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        required
        style={{width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"}}
      >
        <option value="">Select an option</option>
        <option value="Therapists">Therapists</option>
        <option value="Mental Health Counsellors">Mental Health Counsellors</option>
        <option value="Doctors">Doctors</option>
        <option value="physiotherapists"> Physiotherapists</option>
        <option value="Occupational Therapists">Occupational Therapists</option>
        <option value=" Massage Therapists"> Massage Therapists</option>
        <option value="Psychiatrists">Psychiatrists</option>
        <option value="Osteopaths">Osteopaths</option>
        <option value="Naturopaths">Naturopaths</option>
        <option value="Cranio-sacral specialists>">Cranio-sacral specialists</option>
        <option value="Yoga Teachers">Yoga Teachers</option>
        <option value="Dance Therapists">Dance Therapists</option>
          <option value="Trainers">Trainers</option>
        <option value="Coaches">Coaches</option>
        <option value="Educators">Educators</option> 
        <option value="Social Workers">Social Workers</option>
        <option value="Pedagogues">Pedagogues</option>    
        <option value="Students">Students</option>                                                                        
        <option value="Others">Others (please specify)</option>
      </select>
      {formData.industry === "Others" && (
        <input
          type="text"
          name="otherIndustry"
          value={formData.otherIndustry}
          onChange={handleChange}
          required
          placeholder="Please specify your industry"
          style={{width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontFamily: "cormorant"}}
        />
      )}

      <label style={{color: "black", display: "block", marginBottom: "10px", fontFamily: "cormorant"}}>
        How did you hear about Bodynamic International? *
      </label>
      <select
        name="referralSource"
        value={formData.referralSource}
        onChange={handleChange}
        required
        style={{width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "cormorant"}}
      >
        <option value="">Select an option</option>
        <option value="Bodynamic website">Bodynamic website</option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="Referral">Referral</option>
      </select>
      {formData.referralSource === "Referral" && (
        <input
          type="text"
          name="referralName"
          value={formData.referralName}
          onChange={handleChange}
          placeholder="Who referred you?"
          style={{width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontFamily: "cormorant"}}
        />
      )}
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