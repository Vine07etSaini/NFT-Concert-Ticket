import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PurchasedTickets() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const imgUrl = state?.image; // Get the selected image URL

  return (
    <>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      border: '2px solid #333',
      borderRadius: '10px',
      padding: '15px',
      backgroundColor: '#2c2c2c',
      maxWidth: '650px',
      margin: '0 auto',
      color: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'relative',
    }}>
      {/* Left Image Section */}
      <div style={{ flex: '0 0 180px', marginRight: '20px' }}>
        <img
          src="https://stirring-salmiakki-15af11.netlify.app/ICC_Corporate_Spirit_LowContrast_RGB300.jpg" // Display the selected image
          alt="Selected NFT"
          style={{
            height: '200px',
            width: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Middle Content Section */}
      <div style={{ flex: '1', marginRight: '20px' }}>
        <h3 style={{ margin: '0 0 10px' }}>Concert Ticket</h3>
        <p>
          <strong>Event:</strong> Diljit Dosanjh Live<br />
          <strong>Date:</strong> Dec 20, 2023<br />
          <strong>Venue:</strong> Music Hall<br />
          <strong>Seat:</strong> Row A, Seat 10
        </p>
      </div>

      {/* Right Image Section */}
      <div style={{ flex: '0 0 120px' }}>
        {/* <img
          src=""
          alt=""
          style={{
            height: '180px',
            width: '70px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        /> */}
      </div>
    </div>
   </>
  );
}

export default PurchasedTickets;
