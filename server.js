const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/login", (req, res) => {
  console.log("req", req.body);
  const { username, password } = req.body;
  if (username === "eystercolin" && password === "cesokker12") {
    console.log("LOGIN!");
    res.status(200).send({
      success: true
    });
  } else {
    res.status(404).send({
      success: false
    });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
