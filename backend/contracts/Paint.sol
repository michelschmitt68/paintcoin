// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;



// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // creer un token erc20
import "@openzeppelin/contracts/access/Ownable.sol"; //proprietaire du contrat

contract Paint is ERC20, Ownable {  

    uint256[] private table;
    uint256 tableLength;
    mapping (uint256 => address) public changeByAddress;
    event ColorChanged(uint256 indexed index, uint256 color, address changeBy);

    constructor(address _initialOwner, uint256 _tableLength) 
        ERC20("Paint  token", "Paintcoin")
        Ownable(_initialOwner) {
            for(uint i = 0; i< _tableLength; i++){
                table.push(0);
            }
            tableLength = _tableLength;
    }


    function changeColor(uint256 _color, uint256 _index) external payable {
        require(_color <= 16 && _color != table[_index], "Error with a color");
        require(_index < tableLength, "Not in the table");
        
        table[_index] = _color;
        changeByAddress[_index] = msg.sender;
        emit ColorChanged(_index, _color, msg.sender);

        //Emit
    }


    function getTable() external view returns (uint256[] memory) {
        return table;
    }

    function addCell(uint256 _numberCell) external {
        for(uint256 i = 0; i < _numberCell; i++ ) {
            table.push(0);        
        }

        tableLength += _numberCell;
    }

}