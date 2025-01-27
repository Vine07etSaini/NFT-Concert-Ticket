import React from 'react';
import './LogIn.css'; // Custom CSS for styling buttons
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className="login-container">
      
      <div className="button-container">
        <Link to="/admin" className="login-btn btn">LogIn as Admin</Link>
        <Link to="/user" className="login-btn btn">LogIn as User</Link>
      </div>
    </div> 
  );
}

export default LogIn;
