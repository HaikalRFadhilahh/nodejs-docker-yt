const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.status(200).send("Belajar Deployment Docker Bersama Haikal!");
});

app.get("/:nama", async (req, res) => {
  const nama = req.params.nama;

  return res.status(200).send(`Hello ${nama},Selamat Belajar Docker!!!😁`);
});

app.listen(PORT, () => {
  console.log(`Application Running On Port ::${PORT}`);
});
