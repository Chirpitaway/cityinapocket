const express = require("express");
const path = require("path");
const morgan = require('morgan')
const colors = require("colors");
const dotenv = require("dotenv").config();
const fs = require("fs");
const { errorHandler } = require("./middleware/errorMiddleware");
__dirname = path.resolve();

const PORT = process.env.PORT || 8000;
const app = express();

//Init Morgan Logging
var accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' })
app.use(morgan('combined', {
    stream: accessLogStream
}))

const { connectDB } = require("./config/db");

// Connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/cities", require("./routes/cityRoutes"));
app.use("/api/v1/emergency-services", require("./routes/emergencyServiceRoutes"));
app.use("/api/v1/tags", require("./routes/tagRoutes"));
app.use("/api/v1/providers", require("./routes/providerRoutes"));
app.use("/api/v1/tickets", require("./routes/ticketRoutes"));
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
module.export = app;
