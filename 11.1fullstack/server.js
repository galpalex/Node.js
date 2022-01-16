const express = require("express");
const app = express();

const {
  loadUsers,
  readUser,
  addUser,
  deleteUser,
  deposite,
  credit,
  withdraw,
  transfer,
} = require("./assets/utils");

app.use(express.json());

app.get("/bank-api/users", (req, res) => {
  try {
    res.status(200).send(loadUsers());
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.get("/bank-api/users/:id", (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).send(readUser(id));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.post("/bank-api/users", (req, res) => {
  try {
    res.status(201).send(addUser(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.delete("/bank-api/:id", (req, res) => {
  try {
    res.status(202).send(deleteUser(req.params));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.put("/bank-api/deposite", (req, res) => {
  try {
    res.status(202).send(deposite(req.query));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.put("/bank-api/credit", (req, res) => {
  try {
    res.status(202).send(credit(req.query));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.put("/bank-api/withdraw", (req, res) => {
  try {
    res.status(202).send(withdraw(req.query));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.put("/bank-api/transfer", (req, res) => {
  try {
    res.status(202).send(transfer(req.query));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
