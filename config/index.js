const config = {
  server: {
    port: parseInt(process.env.PORT, 10) || 8545,
  },
  database: {
    dbPath: process.env.DB_PATH || "database",
  },
  chain: {
    networkId: parseInt(process.env.NETWORK_ID, 10) || 5777,
    chainId: parseInt(process.env.CHAIN_ID, 10) || 1337,
  },
  miner: {
    coinbase:
      process.env.COINBASE || "0x0000000000000000000000000000000000000000",
  },
  wallet: {
    mnemonic:
      process.env.MNEMONIC ||
      "Contract Gas ERC EVM DeFi dApp Wallet Ethereum Blockchain NFT Ether ETH",
    totalAccounts: parseInt(process.env.TOTAL_ACCOUNTS, 10) || 10,
    defaultBalance: parseFloat(process.env.DEFAULT_BALANCE) || 10000,
    accountKeysPath: process.env.ACCOUNT_KEYS_PATH || "./keys/keys.json",
  },
};

module.exports = config;
