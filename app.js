const startServer = require("./server");

(async () => {
  try {
    await startServer();
  } catch (err) {
    console.error("Failed to start the application:", err);
    process.exit(1);
  }
})();
