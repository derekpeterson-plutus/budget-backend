//Dependencies
const app = require('./app');

require('dotenv').config();

//PORT ==> Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//LISTEN TO PORT
app.listen(PORT, () =>
  console.log(' 🚀 Listening to traffic on port: 🚀 ', PORT)
);
