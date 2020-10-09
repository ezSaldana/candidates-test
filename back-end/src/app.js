require('./Config/config');

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// ==============================
// MIDDLEWARES
// ==============================
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ==============================
// PUBLIC
// ==============================
app.use(express.static(__dirname + '/Public'));

// ==============================
// ROUTES GLOBAL CONFIG
// ==============================
app.use('/api', require('./Routes/index'));
app.get('*', function(req, res) {
  res.redirect('/');
 });

// ==============================
// EXECUTION
// ==============================
require('./database');

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});