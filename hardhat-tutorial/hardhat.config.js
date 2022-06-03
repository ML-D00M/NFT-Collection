require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};

// 0xC2EC3f60F53CA73e482e326d642CBCE52F2fC839 - deployed CryptoDevs contract address
// 0x06cBCE4654c4ab2fc695c66Da03d2074C4cAcCdC - deployed CryptoDevs for OpenSea contract address
