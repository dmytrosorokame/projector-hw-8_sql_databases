const express = require("express");

const { sequelize } = require("./db/index");
const { UserModel } = require("./model/userModel");
const { generateUser } = require("./utils/utils");

const app = express();

app.post("/user", async (req, res) => {
  try {
    const user = generateUser();

    await UserModel.create(user);

    res.status(201).send(user);
  } catch (e) {
    console.log("Failed to create user", e);
    res.status(500).send(e);
  }
});

app.listen(3000, async () => {
  console.log("Server running on port 3000");
});
