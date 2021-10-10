const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.get('/weather/:lat/:lon', async (req, res) => {
    const apiKEY = process.env.OPEN_WEATHER_API_KEY;
    const lat = req.params.lat;
    const lon = req.params.lon;
    console.log(lat, lon);
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`;
    const response = await fetch(apiURL);
    const json = await response.json();
    res.json(json);
});