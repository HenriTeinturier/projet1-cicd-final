const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || "3000";
const env = process.env.NODE_ENV || "development";
const router = require("./routes");

console.info(`🚀🚀 Server running on port ${port} and env is ${env} 🚀🚀`);

require("./database");

const app = express();
app.use(express.static("../dist"));
app.use(express.json());
app.use(cookieParser());

// Ajout des headers CORS manuellement
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "http://ec2-51-21-115-3.eu-north-1.compute.amazonaws.com:4000"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  // Gestion de la requête OPTIONS (pre-flight)
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port);
