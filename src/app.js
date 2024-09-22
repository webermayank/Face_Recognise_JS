const path = require("path");
const express = require("express");
const helmet = require("helmet"); // Add this line

const app = express();
const port = process.env.PORT || 3000;

const basePath = path.join(__dirname, "../public");

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'", "data:"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"],
        // Add other directives as needed
      },
    },
  })
); // Add this line to use helmet
app.use(express.static(basePath));
app.get("/face_detection", (req, res) => {
  res.sendFile(path.join(basePath, "index.html"));
});

//start express server
app.listen(port, () => {
  console.log("Server started on post " + port);
});
