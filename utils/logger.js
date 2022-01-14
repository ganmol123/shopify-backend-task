const winston = require("winston");
const { LoggingWinston } = require("@google-cloud/logging-winston");
const CONFIG = require("./../config/index");

const gcpLogging = new LoggingWinston();
const transports = [];

// Log in console only for local environment
if (CONFIG.NODE_ENV === "local")
  transports.push(new winston.transports.Console());
else transports.push(gcpLogging);

const logger = winston.createLogger({
  transports,
});

module.exports = logger;
