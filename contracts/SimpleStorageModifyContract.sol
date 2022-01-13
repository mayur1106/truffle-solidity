pragma solidity ^0.5.0;

contract SimpleStorageModifyContract {

    string public data;   //public variable declaration which will be accessible for whole contract

    // public set method to modify the data variable 
    function set(string memory _data) public {
        data = _data;
    }

    // Public get method which will return the data
    function get() view public returns (string memory){
        return data;
    }
    
}