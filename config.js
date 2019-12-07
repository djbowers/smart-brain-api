const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  CLARIFAI_API_KEY: process.env.CLARIFAI_API_KEY,
}
