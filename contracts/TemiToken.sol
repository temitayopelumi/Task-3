// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TemiToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("CANDLE", "CAD") {
        _mint(msg.sender, initialSupply*(10 ** decimals()));
    }

    function buyToken(address receiver, uint256 amount) public onlyOwner {
        _mint(receiver, amount);
    }
}



