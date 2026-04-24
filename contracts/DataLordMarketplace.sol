// SPDX-License-Identifier: BSL-1.1
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title DataLordMarketplace
 * @dev Handles the listing and sale of data assets on the DataLord platform.
 */
contract DataLordMarketplace is Ownable {
    IERC20 public paymentToken; // Default: USDC
    address public treasury;
    uint256 public feeBps = 250; // 2.5%

    struct Listing {
        address seller;
        string metadataURI; // Pointer to DKG Knowledge Asset
        uint256 price;
        bool isActive;
        uint256 totalSales;
    }

    mapping(uint256 => Listing) public listings;
    uint256 public listingCount;

    event DataListed(uint256 indexed listingId, address indexed seller, uint256 price);
    event DataPurchased(uint256 indexed listingId, address indexed buyer, uint256 price);

    constructor(address _paymentToken, address _treasury) Ownable(msg.sender) {
        paymentToken = IERC20(_paymentToken);
        treasury = _treasury;
    }

    /**
     * @notice Lists a new dataset for sale.
     */
    function listData(string calldata _metadataURI, uint256 _price) external returns (uint256) {
        require(_price > 0, "Price must be > 0");
        
        listingCount++;
        listings[listingCount] = Listing({
            seller: msg.sender,
            metadataURI: _metadataURI,
            price: _price,
            isActive: true,
            totalSales: 0
        });

        emit DataListed(listingCount, msg.sender, _price);
        return listingCount;
    }

    /**
     * @notice Purchases access to a dataset.
     */
    function purchaseData(uint256 _listingId) external {
        Listing storage listing = listings[_listingId];
        require(listing.isActive, "Listing not active");

        uint256 fee = (listing.price * feeBps) / 10000;
        uint256 sellerProceeds = listing.price - fee;

        // Transfer payment
        require(paymentToken.transferFrom(msg.sender, treasury, fee), "Fee transfer failed");
        require(paymentToken.transferFrom(msg.sender, listing.seller, sellerProceeds), "Seller transfer failed");

        listing.totalSales++;

        emit DataPurchased(_listingId, msg.sender, listing.price);
    }

    /**
     * @notice Updates the price of a listing.
     */
    function updatePrice(uint256 _listingId, uint256 _newPrice) external {
        require(listings[_listingId].seller == msg.sender, "Not the seller");
        listings[_listingId].price = _newPrice;
    }

    /**
     * @notice Deactivates a listing.
     */
    function deactivateListing(uint256 _listingId) external {
        require(listings[_listingId].seller == msg.sender, "Not the seller");
        listings[_listingId].isActive = false;
    }
}
