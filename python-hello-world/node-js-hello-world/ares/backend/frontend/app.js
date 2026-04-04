const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const URL = 'http://localhost:8000/api';

// correct fetch import
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', async (req, res) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    console.log("Backend data:", data);

    res.render('index', { data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Ares listening on port 3000!');
});
