// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TemiiNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("TemiNFT", "TFTZ") {}

    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    function contractURI() public pure returns (string memory) {
        return "https://ipfs.io/ipfs/QmS97zKM3V2vrTMTgT5ZJvctaWXzJr3urnWQikhiW5yV2w";
    }

    function Mint(address to, uint256 tokenId, string memory uri)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIdCounter.increment();
        uint256 newitemid = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return newitemid;
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}