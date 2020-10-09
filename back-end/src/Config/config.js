// ==============================
// PORT
// ==============================
process.env.PORT = process.env.PORT || 1234;

// ==============================
// ENVIRONMENT
// ==============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==============================
// DATABASE
// ==============================
if (process.env.NODE_ENV === 'dev') {
  process.env.DB_URL = 'mongodb://localhost:27017/gpactest';
  process.env.MONGO_DEFAULT_POSITION_ID = '5f72792d0886d711a0421cd4';
} else {
  process.env.DB_URL = process.env.MONGO_URL;
  process.env.MONGO_DEFAULT_POSITION_ID = process.env.MONGO_DEFAULT_POSITION_ID;
}