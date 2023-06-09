const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send('hello dsasdfdfs');
});

app.listen(3333, () => {
  console.log('App is listening on port 3333');
});
