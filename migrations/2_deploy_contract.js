const MyContract = artifacts.require("Voting")

module.exports = function(deployer) {
  // Deploy MyContract
  deployer.deploy(MyContract, /* constructor arguments */);
};
