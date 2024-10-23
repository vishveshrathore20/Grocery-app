const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./DB/connection");
const color = require("colors");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
// app.use("/api/v1", require("./routes/app.routes"));

// Error handling middleware
// app.use(errors.errorHandler);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Grocery app");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `.bgBlue.magenta);
});

connectDB(process.env.DATABASE_URL);
