const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Build & deploy berhasil 🚀"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});
