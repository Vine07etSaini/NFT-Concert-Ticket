import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Web3 from "web3";
import TicketManagementABI from "../contracts/TicketManagement.json";
const ticketContractAddress = "0xd57089C63cE39BC0f9626E7FDd63D44712d622DC";

function Navbar() {
  const [account, setAccount] = useState("");
  const [ticketContract, setTicketContract] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [ticketAmount, setTicketAmount] = useState("0.005"); // Example ticket price in Ether

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      const ticketContractInstance = new web3Instance.eth.Contract(
        TicketManagementABI.abi,
        ticketContractAddress
      );
      setTicketContract(ticketContractInstance);
    } else {
      alert("Please install MetaMask!");
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "orange" }} href="/">TicketSoft</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={{
                    pathname: "/yourTickets",
                  }}
                  style={{ color: "orange" }}
                >
                  Your Tickets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "orange" }}>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
