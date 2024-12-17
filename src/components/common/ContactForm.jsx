const ContactForm = () => {
  return <form className="contact-form needs-validation" method="post">
    <div style={{ fontFamily: "EditorNote", padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Main Heading */}
     
            <h1 className="text-center" style={{ fontfamily: "EditorsNote", fontweight: '400', fontstyle: 'normal',color:'#2ed8df' }}>
        Resigration Form
      </h1>
      {/* Form */}
      <form>
        {/* Email Address */}
        <label style={{color:'black', marginBottom: '10px' }}>
        Full name <span style={{ color: 'black' }}>*</span>
        </label>
        <input
          type="text"
          placeholder=""
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
        <label style={{ color:'black',display: 'block', marginBottom: '10px' }}>
          Email Address <span style={{ color: 'black' }}>*</span>
        </label>
        <input
          type="email"
          placeholder=""
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
        <label style={{color:'black', display: 'block', marginBottom: '10px' }}>
          Name of your Company <span style={{ color: 'black' }}>*</span>
        </label>
        <input
          type="text"
          placeholder=""
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Industry */}
        <label style={{ color:'black',display: 'block', marginBottom: '10px' }}>
          What industry are you in? <span style={{ color: 'black' }}>*</span>
        </label>
        <select
        type="text"
        placeholder="Select the Option"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          <option>Select the option</option>
          <option>Therapists</option>
          <option>Mental Health Counsellors</option>
          <option>Doctors</option>
          <option>Physiotherapists</option>
          <option>Occupational Therapists</option>
          <option>Massage Therapists</option>
          <option>Psychiatrists</option>
          <option>Osteopaths</option>
          <option>Naturopaths</option>
          <option>Cranio-sacral specialists</option>
          <option>Yoga teachers</option>
          <option>Dance teachers</option>
          <option>Trainers</option>
          <option>Social workers</option>
          <option>Pedagogues</option>
          <option>Teachers</option>
          <option>Salespeople</option>
          <option>Parents</option>
          <option>Others (if chosen - please specify)</option>

          


        </select>

        {/* Website */}
        {/* <label style={{ color:'black',display: 'block', marginBottom: '10px' }}>
        How did you hear about Bodynamic International? 
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
        /> */}

        {/* How did you hear */}
        <label style={{color:'black', display: 'line', marginBottom: '10px',fontFamily:'EditorNote' }}>
        How did you hear about Bodynamic International? <span style={{ color: 'black' }}>*</span>
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
        <label style={{ color:'black',display: 'block', marginBottom: '10px' }}>
          If you found us from a referral, who referred you? We want to thank them! <span style={{ color: 'black' }}>*</span>
        </label>
        <input
          type="text"
          placeholder=""
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Budget */}
        <label style={{color:'black', display: 'block', marginBottom: '10px' }}>
        What brings you to the training? <span style={{ color: 'black' }}>*</span>
        </label>
        <input
          type="text"
          placeholder=""
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        {/* Services */}
        <label style={{color:'black', display: 'block', marginBottom: '10px' }}>
        Do you see yourself as a Bodynamic Therapist in the near future? <span style={{ color: 'black' }}>*</span>
        </label>
        
        <input
          type="text"
          placeholder=""
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        {/* Additonal Note */}
        <label style={{color:'black', display:'block', marginBottom:'10px'}}>
          Additonal Note <span style={{ color: 'black' }}>*</span>
        </label>
        <input type="text"
         placeholder=""
         style={{
           width: '100%',
           padding: '10px',
           marginBottom: '20px',
           border: '1px solid #ccc',
           borderRadius: '4px',}} />
        {/* Submit */}
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            backgroundColor: '#2ed8df',
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