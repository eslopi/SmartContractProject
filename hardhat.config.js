require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [`0x${process.env.e38934fa138c8c400016671bc092ecb419b1820a10949e1067a910dd57c98519}`]
    }
  }
};
