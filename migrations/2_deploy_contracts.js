const TemiToken = artifacts.require("TemiToken");


module.exports = function (deployer) {
  deployer.deploy(TemiToken, 1000000);
};
