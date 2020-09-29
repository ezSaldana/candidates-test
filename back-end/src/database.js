const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, res) => {
  if (err) throw err;
  console.log('Database connected');
});