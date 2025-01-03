const createCipherNetwork = require("./cipherNetwork");
const { logInfo, logError } = require("../utils/logger");
const config = require("../config");

const startServer = async () => {
  const server = createCipherNetwork();
  const PORT = config.server.port;

  server.listen(PORT, async (err) => {
    if (err) {
      logError("Error starting server:", err);
      throw err;
    }

    logInfo(`Ethereum network listening on port ${PORT}...`);

    const provider = server.provider;
    const accounts = await provider.request({
      method: "eth_accounts",
      params: [],
    });

    logInfo("Accounts:", accounts);
  });
};

module.exports = startServer;
