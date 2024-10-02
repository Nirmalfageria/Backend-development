import express from "express";
const app = express();
const port = 3000;
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", (req, res) => {
  const { username, email } = req.body;
  res.send(`Thank you for submitting the form, ${username}! We will contact you at ${email}.`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
