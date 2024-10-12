
// how to fetch data from an API using axios in Express.js

import express from "express";
import axios from "axios";
const app = express();
const port = 3000;
import bodyParser from "body-parser";

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(port, () => {
  console.log("app is listening on port " + port);
});

// GET request
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index3.ejs", { data: result });
  } catch (error) {
    console.log(error);
    res.render("index3.ejs", { error: error.message });
  }
});

// POST request
app.post("/", async (req, res) => {
  try {
    const type = req.body.type;
    const participants = req.body.participants;
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    const result = response.data;
    res.render("index3.ejs", {
      data: result[Math.floor(Math.random() * result.length)],
    });
  } catch (error) {
    console.log(error);
    res.render("index3.ejs", { error: "No such activity is there" });
  }
});
