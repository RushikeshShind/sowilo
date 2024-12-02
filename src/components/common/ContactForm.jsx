const ContactForm = () => {
  return <form className="contact-form needs-validation" method="post">
    <div style={{ fontFamily: "'Arial', sans-serif", padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Main Heading */}
     
           <h1 style={{ fontfamily: "Sevillana-regular", fontweight: '400', fontstyle: 'normal' }}>
        Inquire to Work with Us
      </h1>

      {/* Form */}
      <form>
        {/* Email Address */}
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email address <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="email"
          placeholder="Your email"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Full Name */}
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Full name <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          placeholder="Your full name"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Name of your business */}
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Name of your business
        </label>
        <input
          type="text"
          placeholder="Your business name"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Industry */}
        <label style={{ display: 'block', marginBottom: '10px' }}>
          What industry are you in?
        </label>
        <select
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          <option>Select an option</option>
          <option>Industry 1</option>
          <option>Industry 2</option>
          <option>Industry 3</option>
        </select>

        {/* Website */}
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Link to your current website (if you have one)
        </label>
        <input
          type="url"
          placeholder="https://yourwebsite.com"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* How did you hear */}
        <label style={{ display: 'block', marginBottom: '10px' }}>
          How did you hear about In Flow Design Co.? <span style={{ color: 'red' }}>*</span>
        </label>
        <select
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          <option>Select an option</option>
          <option>Referral</option>
          <option>Social Media</option>
          <option>Other</option>
        </select>

        {/* Referral */}
        <label style={{ display: 'block', marginBottom: '10px' }}>
          If you found us from a referral, who referred you? We want to thank them!
        </label>
        <input
          type="text"
          placeholder="Referral name"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Budget */}
        <label style={{ display: 'block', marginBottom: '10px' }}>
          What's your budget for our done-for-you services?
        </label>
        <select
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          <option>Select an option</option>
          <option>Less than $1,000</option>
          <option>$1,000 - $5,000</option>
          <option>$5,000+</option>
        </select>

        {/* Services */}
        <label style={{ display: 'block', marginBottom: '10px' }}>
          What services are you interested in? <span style={{ color: 'red' }}>*</span>
        </label>
        <select
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          <option>Select an option</option>
          <option>Web Design</option>
          <option>Branding</option>
          <option>Marketing</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>

  </form>;
};

export default ContactForm;