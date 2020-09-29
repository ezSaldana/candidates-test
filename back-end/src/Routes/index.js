const express = require('express');
const app = express();

app.use('/candidates', require('./Candidates'));
app.use('/locations', require('./Locations'));
app.use('/degrees', require('./Degrees'));
app.use('/positions', require('./Positions'));
app.use('/industries', require('./Industry'));

module.exports = app;