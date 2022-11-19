const express = require("express");
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 8000;
const app = express();
const { connectDB } = require("./config/db");
__dirname = path.resolve();
//connect to database
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json({ message: "hello" });
});
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/cities", require("./routes/cityRoutes"));
app.use("/api/v1/emergency-services", require("./routes/emergencyServiceRoutes"));
app.use("/api/v1/tags", require("./routes/tagRoutes"));
app.use("/api/v1/providers", require("./routes/providerRoutes"));
app.use("/api/v1/tickets", require("./routes/ticketRoutes"));
app.use(errorHandler)
if (process.env.NODE_ENV === "production") {
  //Set build folder as static
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json({ message: "hello" });
  });
}
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
module.export = app;
