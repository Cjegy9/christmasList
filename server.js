const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routers/user");
const port = 3000;

const MONGOURL =
  "mongodb+srv://eystercolin:cesokker12@cluster0-5l6wr.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use(express.json());
app.use(userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
