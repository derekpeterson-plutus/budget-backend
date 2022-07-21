//Dependencies
const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

//PORT ==> Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Middleware
//___________________

app.use(express.json()); // returns middleware that only parses JSON

//Cross-Origin-Resource-Sharing (CORS) ==> this allows any app/site from anywhere access your API. This is a great way to start to get things up and running. Later, add restrictions, as needed.
app.use(cors());

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello World! This is the Backend of Budget App!');
});

//LISTEN TO PORT
app.listen(PORT, () =>
  console.log(' 🚀 Listening to traffic on port: 🚀 ', PORT)
);
