const express = require("express");

const app = express();

app.get("/numbers", (req, res) => {
  res.send("Success using Get");
});

app.post("/numbers", (req, res) => {
  res.send("Success using Post");
});

app.put("/numbers", (req, res) => {
  res.send("Success using Put");
});

app.delete("/numbers", (req, res) => {
  res.send("Success using Delete");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
