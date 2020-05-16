const dotenv = require('dotenv');
dotenv.config();
const aylien = require("aylien_textapi");
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

(async function () {
    textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
  }
});
})();
