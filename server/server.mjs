import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("jalanin aja dulu");
});

app.listen(PORT, () => {
  console.log(`⚡⚡server running ini port ${PORT}⚡⚡ `);
});
