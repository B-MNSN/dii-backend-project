const express = require('express');
const router = express.Router();
const data = require('../ForDatas/Flights.json');

// router.get('/', (req, res) => {
//     res.json(data);
// });

router.use('/', (req, res, next) => {
    const filters = req.query;
    const filteredFlights = data.filter(flight => {
        let isValid = true;
        for (key in filters) {
            // console.log(key, flight[key], filters[key]);
            isValid = isValid && flight[key] == filters[key];
        }
        return isValid;
    });
    res.send(filteredFlights);
});

module.exports = router;
