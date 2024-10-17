import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// API BUILDING

app.get('/', (req, res) => {   
    res.send("Hello World");
 });

app.listen(port, () => {    
  console.log(`Server is running on port ${port}`);
});