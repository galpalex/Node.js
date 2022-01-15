const express = require("express");

const app = express();
app.use(express.json());

let arr = [1, 2, 3, 4, 5, 6];

app.get("/numbers", (req, res) => {
  res.send(arr);
});

app.post("/numbers", (req, res) => {
  const { userNum } = req.body;
  if (arr.includes(+userNum)) {
    res.status(400).send(`${userNum} already exist in the array ${arr}`);
  } else {
    arr.push(+userNum);
    res.status(200).send(`${userNum} added to the array ${arr}`);
  }
});

app.delete("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const duplicate = arr.find((number) => number === +num);
  if (!duplicate) {
    res
      .status(400)
      .send(
        `Can not delete ${num} because it doesn't exists in the array ${arr}`
      );
  } else {
    const index = arr.findIndex((number) => number === +num);
    arr.splice(index, 1);
    res
      .status(200)
      .send(`You have deleted ${num} successfully from the array ${arr}`);
  }
});

app.put("/numbers/:deleteNum", (req, res) => {
  const { updateNum } = req.query;
  const { deleteNum } = req.params;
  const duplicate = arr.find((number) => number === +deleteNum);
  if (!duplicate) {
    res
      .status(400)
      .send(
        `Can not delete ${deleteNum} because it doesn't exists in the array ${arr}`
      );
  } else {
    const index = arr.findIndex((number) => number === +deleteNum);
    arr.splice(index, 1, +updateNum);
    res
      .status(200)
      .send(
        `You replaced successfully ${deleteNum} with ${updateNum} in the array ${arr}`
      );
  }
});

const port = 3000;
app.listen(3000, () => {
  console.log(`Server is up on port ${port}.`);
});
