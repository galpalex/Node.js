const axios = require("axios"); //for axios fetch
const request = require("request"); //for request module fetch
const got = require("got"); //for Got module fetch

const url =
  "http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=32.085300&lon=34.781769&appid=fbb5a29cf4c67bb8ccfba0781293e5d7";

// 1. Fetch using Axios
axios
  .get(url)
  .then((response) => {
    const airPollution = response.data.list[0];
    console.log(
      `Fetch using Axios - Air quality index in Tel Aviv today is ${airPollution.main.aqi}`
    );
  })
  .catch((error) => {
    console.log(error);
  });

// 2. Fetch using request module
request(url, { json: true }, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  const airPollution = body.list[0];
  console.log(
    `Fetch using request module - Air quality index in Tel Aviv today is ${airPollution.main.aqi}`
  );
});

// 3. Fetch using Got module
got(url, { json: true })
  .then((response) => {
    const airPollution = response.body.list[0];
    console.log(
      `Fetch using Got module - Air quality index in Tel Aviv today is ${airPollution.main.aqi}`
    );
  })
  .catch((error) => {
    console.log(error.response.body);
  });
