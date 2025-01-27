import React from 'react';
import './User.css'; 
import { Link } from 'react-router-dom';

function User() {
  return (
    <div className="user-container">
      <h2>User Registration</h2>
      <form className="user-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" />
        </div>
        
        <a type="submit" className="submit-btn btn btn-primary " href="https://5irescan.io/dashboard">Submit</a>
      </form>
    </div>
  );
}

export default User;
