import { useState } from 'react';

function ContactForm() {
  // 1. STATE: One object holding all four form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  // 2. FUNCTION: Updates the specific field that the user is typing in
  function handleChange(event) {
    const { name, value } = event.target; 
    // event.target.name gets the "name" attribute of the input
    // event.target.value gets what the user typed
    
    
    setFormData(prevData => ({
      ...prevData,    // Keep all the existing fields exactly as they are
      [name]: value   // [name] uses the input's name to dynamically update the right field
    }));
  }

  // 3. FUNCTION: Runs when the form is submitted
  function handleSubmit(event) {
    event.preventDefault(); // Stop page refresh
    console.log("Form submitted with:", formData); // Just log the data for now
    alert("Message sent! (Check console for data)");
    
    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      comments: ''
    });
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      
      <div className="form-group">
        <label>First Name</label>
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Comments</label>
        <textarea 
          name="comments" 
          value={formData.comments} 
          onChange={handleChange} 
          rows="4"
        ></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
