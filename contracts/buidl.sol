pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MyWavePortal {
    uint256 totalWaves;
    constructor() {
        console.log("yooooooooooo");
    }

    function wave() public {
        totalWaves+=1;
        console.log("%s has bumped!",msg.sender);
    }

    function getTotalWaves() public view returns(uint256) {
        console.log("Total fist bumps = %d",totalWaves);
        return totalWaves;
    }
}