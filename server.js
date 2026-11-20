
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// API routes
app.use("/books", require("./routes/bookRoutes"));

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);

    if (
        err.name === "ValidationError" ||
        err.name === "CastError" ||
        err instanceof SyntaxError
    ) {
        return res.status(400).json({
            message: err.message
        });
    }

    res.status(500).json({
        message: "Internal server error"
    });
});

// Connect database and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");

        app.listen(process.env.PORT || 3000, () => {
            console.log("Server running on port 3000");
        });
    })
    .catch((error) => {
        console.error("MongoDB Connection Failed:", error.message);
    });
