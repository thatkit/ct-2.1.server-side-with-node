const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.post('/api', (req, res) => {
    console.log(req.body);
    res.json({
        status: 'success',
        geo: {
            lat: req.body.lat,
            lon: req.body.lon
        }
    });
});