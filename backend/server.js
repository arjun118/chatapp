require("dotenv").config({ path: "../.env" }); //specified the path
const express = require("express");
const app = express();
const { connectDB } = require("../db");
const chats = require("./chats");
const userRoutes = require("./routes/userRoutes");

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("this is home");
});

app.get("/chats", (req, res) => {
  console.log("requested");
  res.send(chats);
});

app.get("/chats/:id", (req, res) => {
  let chat = chats.find((obj) => obj.id === req.params.id);
  res.send(chat);
});

connectDB()
  .then((res) => {
    console.log(res);
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started");
    });
  })
  .catch((e) => {
    console.log("Error occured", e);
  });
