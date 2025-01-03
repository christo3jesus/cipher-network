const logInfo = (...messages) => {
  console.log("[INFO]", ...messages);
};

const logError = (...messages) => {
  console.error("[ERROR]", ...messages);
};

module.exports = {
  logInfo,
  logError,
};
