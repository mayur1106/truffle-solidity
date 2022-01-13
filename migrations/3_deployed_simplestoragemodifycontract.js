const SimpleStorageModifyContract = artifacts.require("SimpleStorageModifyContract");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorageModifyContract);
};
