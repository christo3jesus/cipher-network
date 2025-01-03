const ganache = require("ganache");
const config = require("../config");

const createCipherNetwork = () => {
  const options = {
    server: {
      port: config.server.port,
    },
    database: config.database,
    chain: config.chain,
    miner: config.miner,
    wallet: config.wallet,
  };

  return ganache.server(options);
};

module.exports = createCipherNetwork;
