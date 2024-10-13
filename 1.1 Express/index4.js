import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import { body, validationResult } from 'express-validator';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// // Route to render the login form
// app.get('/', (req, res) => { 
//     res.render("index4.ejs");
// });

// // Route to handle form submission
// app.post('/', 
//   [
//     // Validate input to prevent empty fields
//     body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
//     body('password').isLength({ min:3 }).withMessage('Password must be at least 6 characters long')
//   ], 
//   async (req, res) => {
//     const errors = validationResult(req);
    
//     if (!errors.isEmpty()) {
//       // If validation errors exist, re-render the form with errors
//       return res.render("index4.ejs", { error: errors.array()[0].msg });
//     }

//     let username = req.body.username;
//     let password = req.body.password;

//     try {
//       // Register the user
//       let response = await axios.post("https://secrets-api.appbrewery.com/register", {
//         username: username,
//         password: password
//       });

//       let apiKey = response.data.apiKey;

//       // Use the API key to access the data
//       let data = await axios.get("https://secrets-api.appbrewery.com/data", {
//         headers: {
//           'Authorization': `Bearer ${apiKey}`
//         }
//       });

//       // Render the solution page with the retrieved data
//       res.render("solution4.ejs", { data: data.data, success: "Data fetched successfully!" });

//     } catch (error) {
//       console.log(error.response ? error.response.data : error.message);
      
//       // Render an error message
//       if (error.response && error.response.status === 409) {
//         // Conflict: Username already taken
//         res.render("solution4.ejs", { error: "Sorry, the username is already taken. Please try again." });
//       } else {
//         // Other errors (network issues, server errors, etc.)
//         res.render("solution4.ejs", { error: "An error occurred. Please try again later." });
//       }
//     }
//   }
// );

// ApiKey authentication
  // app.get('/', (req, res) => {
  //   res.render("index4.ejs");
  //   res.send("This is the home page");
  // });

  // app.post('/', async (req, res) => {
  //   try {
  //     let apiKeyResponse = await axios.get("https://secrets-api.appbrewery.com/generate-api-key");
  //     let apiKey = apiKeyResponse.data.apiKey;

  //     let dataResponse = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${apiKey}`);

  //     const result = dataResponse.data;
  //     res.render("solution4.ejs", { data: result, success: "Data fetched successfully!" });

  //   } catch (error) {
  //     console.error("Error fetching data:", error.message);
  //     res.render("solution4.ejs", { error: "An error occurred while fetching data. Please try again later." });
  //   }
  // });

  // // token authentication
 app.get('/', (req, res) => {
res.render("index4.ejs");
 })

 app.post('/', async (req, res) => {
  let { username, password } = req.body;
  try {
    let response = await axios.post("https://secrets-api.appbrewery.com/get-auth-token", {
      username: username,
      password: password
    });

    let token = response.data.token;
// let  token = "8e5a9d02-a3df-42cd-9742-32230abd21a0";
console.log(token);
    let dataResponse = await axios.get("https://secrets-api.appbrewery.com/user-secrets", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const result = dataResponse.data;
    // console.log(result);
    if (Array.isArray(result)) {
      res.render("solution4.ejs", { data: result, success: "Data fetched successfully!" });
    } else {
      // If it's not an array, pass an empty array or handle the error
      res.render("solution4.ejs", { data: [], success: "Data fetched successfully!" });
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.render("solution4.ejs", { error: "An error occurred while fetching data. Please try again later." });
  }
 })

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});