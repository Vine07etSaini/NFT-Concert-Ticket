

import React, { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TicketManagementABI from "../contracts/TicketManagement.json";
import './Ticket.css';
import Web3 from 'web3';
const ticketContractAddress = "0x7B576a0bb00c7CaE769c97bbEc7905F1D73034E3";
import { Link } from 'react-router-dom';

function Ticket() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [tokenId, setTokenId] = useState(null);
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [ticketContract, setTicketContract] = useState(null);
  const image = state?.image;
  const [ticketAmount, setTicketAmount] = useState("0.005");
  const imgUrl = image?.imgUrl;
  const ticketType = "Concert"; // Define ticketType if needed
 useEffect(() => {
      if (window.ethereum) {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
  
          // Initialize the contract
          const ticketContractInstance = new web3Instance.eth.Contract(
              TicketManagementABI.abi,
              ticketContractAddress
          );
          setTicketContract(ticketContractInstance);
      } else {
          alert("Please install MetaMask!");
      }
  }, []);
  
  async function connectWallet() {
  if (window.ethereum) {
      try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await  web3.eth.getAccounts();
          setAccount(accounts[0]);
      } catch (error) {
          console.error("Error connecting to wallet:", error);
      }
  }
}
  const mintTicket = async () => {
    if (!account || !ticketContract) {
      alert("Please connect your wallet and ensure the contract is loaded!");
      return;
    }

    try {
      const ticketAmountInWei = Web3.utils.toWei(ticketAmount.toString(), "ether");

      const result = await ticketContract.methods
        .addTicketOwner(account, ticketAmountInWei, ticketType, imgUrl)
        .send({ from: account, value: ticketAmountInWei });

      console.log("Transaction result:", result);

      // Extract tokenId from the event logs
      const mintedTokenId = result.events.TicketMinted.returnValues[1];
      setTokenId(mintedTokenId);

      alert(`Ticket minted! Token ID: ${mintedTokenId}`);
    } catch (error) {
      console.error("Error minting ticket:", error);
      alert("Failed to mint ticket.");
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  if (!image) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>No ticket selected</h2>
        <p>Please go back and choose an NFT.</p>
        <button
          onClick={handleBackClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
    <div 
    style={{
      position:'absolute',
      color:'white',
      top:'20px',
      right:'30px',
      textAlign:'center'
   }}
    >
      {!account?<button className='btn'style={{
         position:'absolute',
         backgroundColor:'orange',
         color:'white',
         top:'20px',
         right:'30px',
         textAlign:'center'
      }}
      onClick={connectWallet}
      >Connect</button>:`Wallet Connected : ${account}  `
    }
    </div>
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
            src={imgUrl}
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
          <img
            src="barcoadImg.jpg"
            alt="Event QR Code"
            style={{
              height: '180px', 
              width: '70px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        {/* Positioned Button */}
        
        <button
          style={{
            position: 'absolute',
            right: '40px',
            top: '120%',
            transform: 'translateY(-50%)',
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          className='btn'
          onClick={mintTicket}
        >
          
          Confirm
        
        </button>
        
      </div>
    
      
    </>
  );
}

export default Ticket;
