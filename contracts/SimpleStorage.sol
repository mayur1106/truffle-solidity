pragma solidity ^0.5.0;

contract SimpleStorage {

    // Read Only function in smart contract 
    function hello() pure public returns(string memory){
        return "Hello World";
    }

    
}