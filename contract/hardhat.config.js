require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

const dotenv = require("dotenv");
dotenv.config();

function privateKey() {
  return process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
}

module.exports = {
  networks: {
    core_testnet: {
      url: "https://rpc.test.btcs.network",
      chainId: 1115,
      accounts: privateKey(),
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      evmVersion: 'paris',
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
    customChains: [
      {
        network: "core_testnet",
        chainId: 1115,
        urls: {
          apiURL: "https://api.test.btcs.network/api", 
          browserURL: "https://scan.test.btcs.network" 
        }
      }
    ]
  },
  sourcify: {
    enabled: true
  }
};