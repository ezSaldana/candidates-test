require('./Config/config');

const express = require('express');
const app = express();

// ==============================
// MIDDLEWARES
// ==============================


// ==============================
// ROUTES GLOBAL CONFIG
// ==============================


// ==============================
// EXECUTION
// ==============================


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
