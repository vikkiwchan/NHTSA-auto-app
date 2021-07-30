const express = require('express');
const axios = require('axios');
const morgan = require('morgan');

const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Static Files
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.get('/api/recalls', async (req, res, next) => {
  try {
    const { year, make, model } = req.query;
    console.log(year, make, model);
    const { data } = await axios.get(
      `https://api.nhtsa.gov/recalls/recallsByVehicle?make=${make}&model=${model}&modelYear=${year}`
    );
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`app is listening at port ${port}!`);
});
