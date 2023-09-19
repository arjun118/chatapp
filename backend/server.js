const express = require("express");
const app = express();
const chats = require("./chats");
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

app.listen(5000, () => {
  console.log("Server Started on port 5000");
});
