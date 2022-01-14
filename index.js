const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const CONFIG = require("./config/index");
const logger = require("./utils/logger");
const mongodb = require("./services/mongodb");

const app = express();

// Body Parser middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Cors
app.use(cors());

// Routes
app.use("/developer", routes);

// Will be removed later. Kept for testing.
app.get("/", (req, res) => {
  res.send("Homepage"); // Placeholder
});

// Connection
(async () => {
  await mongodb.dbConnect();
  app.listen(CONFIG.PORT || 3000, () =>
    logger.log("info", `Started listening on port:${CONFIG.PORT || 3000}`)
  );
})();
