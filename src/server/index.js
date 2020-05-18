var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

// Aylien API
const dotenv = require('dotenv').config();
const aylien = require("aylien_textapi");
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'));
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/sentiment', function (req, res) {
  const name = req.body.name;
  const text = req.body.text;
  textapi.sentiment({
    'text': text
  }, function(error, response) {
    if (error === null) {
      const percent = Math.round(response.polarity_confidence * 100);
      const polarity = response.polarity;
      res.send({'message' : `So ${name} i'm ${percent}% sure that was a ${polarity} experience today!`});
    }
  });
})
