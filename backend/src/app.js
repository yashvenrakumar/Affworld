const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const feedRoutes = require("./routes/feedRoutes");
const errorHandler = require("./middlewares/errorHandler");
 
require("dotenv").config();

const app = express();
 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/feed", feedRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;
