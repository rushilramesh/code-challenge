const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()
const {MNEMONIC, INFURA_API_KEY} = process.env
const privatekeys = [
  "0x424a0b750f095eeffb37b7e3102d58bc8178cc400b95a98be65f4c36e1a95f6d",
];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      // gas: 5000000
    },
    // testnet: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       MNEMONIC,
    //       `https://data-seed-prebsc-1-s1.binance.org:8545`
    //     ),
    //   network_id: 97,
    //   confirmations: 10,
    //   timeoutBlocks: 200,
    //   skipDryRun: true,
    // },
    // bsc: {
    //   provider: () =>
    //     new HDWalletProvider(MNEMONIC, `https://bsc-dataseed1.binance.org`),
    //   network_id: 56,
    //   confirmations: 10,
    //   timeoutBlocks: 200,
    //   skipDryRun: true,
    // },
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: '5',
      gas: 4465030
    }
  },

  compilers: {
    solc: {
      version: "0.8.15",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
