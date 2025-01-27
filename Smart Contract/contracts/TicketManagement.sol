// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import OpenZeppelin's ERC721 standard
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract TicketManagement is ERC721URIStorage {
    uint256 public _tokenIdCounter;

    struct Tickets {
        address owner;
        uint256 amount;
        string typeOfTicket;
        uint256 time;
        string imgUrl;
    }
    struct Transaction {
        address to;
        address from;
        uint256 amount;
        uint256 timestamp;
        string ticketType;
    }
    // Mappings
    mapping(uint256 => Tickets) public tickets; // Maps tokenId to ticket details
    mapping(uint256 => Transaction) public transactions;

    // Define global variables
    uint256 public standardTicketPrice = 0;
    uint256 public premiumTicketPrice = 0;
    uint256 standardTicketCount;
    uint256 premiumTicketCount;
    uint256 public numberOfTransactions = 0;
    address public concertManager;
    
     modifier onlyManager() {
        require(msg.sender == concertManager, "Only the concert manager can perform this action.");
        _;
    }
    // Events
    event TicketMinted(address owner, uint256 tokenId,string typeOfTicket);
    event Payment(address ownerAddress, uint256 amount);

    // Constructor
    constructor() ERC721("NFTTicket", "TICKET") {
        concertManager = msg.sender;
        _tokenIdCounter=0;
    }
     
    function setTicketCount(uint256 _standardTicketCount, uint256 _premiumTicketCount) public onlyManager {
        standardTicketCount = _standardTicketCount;
        premiumTicketCount = _premiumTicketCount;
    }
      function setTicketPrice(uint256 _standardTicketPrice, uint256 _premiumTicketPrice) public onlyManager {
        standardTicketPrice = _standardTicketPrice;
        premiumTicketPrice = _premiumTicketPrice;
    }

    // Function to mint a new ticket NFT
    function addTicketOwner(
        address _owner,
        uint256 _amount,
        string memory _typeOfTicket,
        string memory _imgUrl
    ) public payable returns (uint256) {
        require(msg.value == _amount, "Incorrect Ether amount sent.");
        address newOwner = msg.sender;
        // Transfer payment to concert manager
        (bool success, ) = concertManager.call{value: _amount}("");
        require(success, "Transfer failed.");
        // Mint NFT Ticket
        uint256 newTokenId = _tokenIdCounter;
        _tokenIdCounter++;
        _safeMint(_owner, newTokenId);
        Transaction storage newTransaction = transactions[newTokenId];
        newTransaction.to = concertManager;
        newTransaction.from = newOwner;
        newTransaction.amount = _amount;
        newTransaction.timestamp = block.timestamp;
        newTransaction.ticketType = _typeOfTicket;
        numberOfTransactions++;

        emit Payment(_owner, _amount);

        // Store ticket details
        tickets[newTokenId] = Tickets({
            owner:_owner,
            amount: _amount,
            typeOfTicket: _typeOfTicket,
            time: block.timestamp,
            imgUrl: _imgUrl
        });
          // Set token URI for the image URL
        _setTokenURI(newTokenId, _imgUrl);


        emit TicketMinted(_owner, newTokenId,_typeOfTicket);

        return newTokenId;
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        Transaction[] memory allTransactions = new Transaction[](
            numberOfTransactions
        );

        for (uint256 i = 0; i < numberOfTransactions; i++) {
            Transaction storage item = transactions[i];

            allTransactions[i] = item;
        }

        return allTransactions;
    }
    // Function to retrieve ticket info for a given tokenId
    function getTicketInfo(uint256 tokenId) public view returns (Tickets memory) {
        return tickets[tokenId];
    }
}
