const CLARIFAI_API_KEY = process.env.CLARIFAI_API_KEY;
const PORT = process.env.PORT;

if (PORT == null || PORT == "") {
  PORT = 8000;
}

module.exports = { PORT, CLARIFAI_API_KEY }
