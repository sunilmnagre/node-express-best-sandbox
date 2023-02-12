"use strict";

const express = require("express");
const cors = require("cors");
const jsend = require("jsend");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./api-docs/swagger.js");

const app = express();

// Setup express server port from ENV, default: 8001
const port = process.env.PORT || 8001;

// For parsing json
app.use(express.json({ limit: "5mb" }));

// For parsing application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);

// Init all other stuff
app.use(cors());
app.use(jsend.middleware);

// API documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

// Send welcome message on landing API call
app.get("/", (req, res) => {
  res.send("<br><br>Welcome to <project> APIs");
});

// Expose all the routes
app.use("/api", require("./app/routes/index"));

// Start the application
app.listen(port, () => {
  console.info("\nApplication has been started on port: " + port);
});

module.exports = app;
