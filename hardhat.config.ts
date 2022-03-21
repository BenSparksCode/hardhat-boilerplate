import { task } from "hardhat/config";
import '@typechain/hardhat'
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import '@nomiclabs/hardhat-waffle'
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import "solidity-coverage";
import '@primitivefi/hardhat-dodoc';
import { HardhatUserConfig } from 'hardhat/types';
import * as dotenv from "dotenv";

dotenv.config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  gasReporter: {
    enabled: true,
  },
  solidity: {
    compilers: [
      { 
        version: "0.8.13", 
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        } 
      }
    ],
  },
  networks: {
    hardhat: {
      accounts: {
        accountsBalance: "1000000000000000000000000"
      }
    },
    localhost: {
      url: "http://localhost:8545",
      /*
        notice no env vars here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API}`,
      accounts: [`${process.env.RINKEBY_DEPLOYER_PRIV_KEY}`],
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API}`,
      accounts: [`${process.env.MAINNET_DEPLOYER_PRIV_KEY}`],
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API}`,
      accounts: [`${process.env.POLYGON_DEPLOYER_PRIV_KEY}`],
      chainId: 137,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API}`,
      accounts: [`${process.env.MUMBAI_DEPLOYER_PRIV_KEY}`],
      chainId: 80001,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  // mocha options can be set here
  mocha: {
    timeout: "300s",
  },
  // typechain: {
  //   outDir: 'src/types',
  //   target: 'ethers-v5',
  //   alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
  //   externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  // },
};
export default config;