// SPDX-License-Identifier: BSL-1.1
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title DataLordVault
 * @dev Manages access control for datasets on the DataLord platform.
 * Each dataset is represented by a unique token. Holding the token grants access.
 */
contract DataLordVault is ERC721, Ownable {
    uint256 public nextTokenId;

    struct Dataset {
        string encryptedLocation; // Encrypted pointer to data (e.g., IPFS, S3)
        address provider;
        uint256 listingId;
    }

    mapping(uint256 => Dataset) public datasets;

    event AccessGranted(uint256 indexed tokenId, address indexed user, uint256 listingId);

    constructor() ERC721("DataLord Access Key", "DL-KEY") Ownable(msg.sender) {}

    /**
     * @notice Mints an access key for a dataset.
     * @dev Usually called by the DataMarketplace after a successful purchase.
     */
    function mintAccessKey(address _to, uint256 _listingId, string calldata _encryptedLocation) external onlyOwner {
        uint256 tokenId = nextTokenId++;
        _safeMint(_to, tokenId);
        
        datasets[tokenId] = Dataset({
            encryptedLocation: _encryptedLocation,
            provider: msg.sender, // In this context, the marketplace is the provider
            listingId: _listingId
        });

        emit AccessGranted(tokenId, _to, _listingId);
    }

    /**
     * @notice Returns the encrypted location for a token holder.
     */
    function getEncryptedLocation(uint256 _tokenId) external view returns (string memory) {
        require(ownerOf(_tokenId) == msg.sender, "Not the token holder");
        return datasets[_tokenId].encryptedLocation;
    }
}
