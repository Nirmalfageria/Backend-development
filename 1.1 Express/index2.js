import morgan from "morgan";
import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path"; // Import path module

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

let isAuthorized = false; // Corrected spelling

// Middleware to check password
function passCheck(req, res, next) {
    const { password } = req.body;
    if (password === "123") {
        isAuthorized = true;
    } else {
        isAuthorized = false; // Reset authorization on wrong password
    }
    next();
}

app.use(passCheck);

// Serve the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
    if (isAuthorized) {
        res.sendFile(path.join(__dirname, "public", "secret.html"));
    } else {
        res.send("<script>alert('You are not authorized to access this page'); window.location.href='/';</script>");
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
