// Load Truffle artifacts and Web3
const TicketManagement = artifacts.require("TicketManagement");

module.exports = async function (callback) {
  try {
    // Get the deployed instance of the contract
    const myNFT = await TicketManagement.deployed();

    // Specify the parameters for adding a ticket
    const _owner = "0x7849b161276C39814E2acF34e4861f18E4A60353"; // Replace with the recipient's address
    const _amount = web3.utils.toWei("1", "ether"); // Convert amount to Wei (1 ether in this case)
    const _typeOfTicket = "VIP"; // Example ticket type
    const _imgUrl = "https://stirring-salmiakki-15af11.netlify.app/ICC_Corporate_Spirit_LowContrast_RGB300.jpg"; // Example image URL

    // Call the addTicketOwner function (send transaction)
    const result = await myNFT.addTicketOwner(_owner, _amount, _typeOfTicket, _imgUrl, { from: "0x39a7218053Df3cbE748B0D4bd85347a27e727282", value: _amount });
    const ticket=await myNFT.getTicketInfo(1)

    console.log("Tiket Info",ticket);

    // Log the transaction result
    console.log("Ticket minted successfully with Token ID:", result.toString());

    callback();
} catch (error) {
    console.error("Error in minting ticket:", error);
    callback(error);
}

};