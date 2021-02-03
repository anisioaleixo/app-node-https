const fs = require("fs");
const https = require("https");
const express = require("express");
const path = require('path')

// Instância express
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world using HTTPS!");
});

// Carrega o certificado e a key necessários para a configuração.
const options = {
  key: fs.readFileSync(path.resolve(__dirname,"certificado","server.key")),
  cert: fs.readFileSync(path.resolve(__dirname,"certificado","server.cert"))
};

// Cria a instância do server e escuta na porta 3000
https.createServer(options, app).listen(3000);
