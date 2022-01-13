const CrudStorage = artifacts.require("CrudStorage");

module.exports = function(deployer) {
  deployer.deploy(CrudStorage);
};
