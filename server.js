const fs = require("fs");
const https = require("https");
const express = require("express");
const PORT = process.env.PORT || 3000
// Instância express
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world using HTTPS!");
});

// Carrega o certificado e a key necessários para a configuração.
const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert")
};

// Cria a instância do server e escuta na porta 3000
https.createServer(options, app).listen(PORT,()=>{
  console.log(`Runing https://localhost:${PORT}`)
});
