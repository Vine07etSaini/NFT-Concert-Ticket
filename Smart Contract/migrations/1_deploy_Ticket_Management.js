const TicketManagment = artifacts.require("TicketManagement")
module.exports = async function (deployer) {
    // Deploy the main contract (e.g., MyNFT)
    await deployer.deploy(TicketManagment);

    // Optionally log the address
    const myNFTInstance = await TicketManagment.deployed();
    console.log("MyNFT deployed at address:", myNFTInstance.address);
};