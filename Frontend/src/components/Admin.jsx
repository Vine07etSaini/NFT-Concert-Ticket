import React, { useState } from 'react';
import './Admin.css'; // You can create a CSS file for styling if needed.
import { Link } from 'react-router-dom';

function Admin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can further handle form submission, like sending data to an API
  };

  return (
    <div className="admin-container">
      <h2>Admin Form</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        
        <a type="submit" className="submit-btn btn btn-primary " href="https://metamask.io/download/">Submit</a>
      </form>
    </div>
  );
}

export default Admin;
