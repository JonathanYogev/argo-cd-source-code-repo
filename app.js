const express = require('express');
const app = express();
const port = 8080;

const environment = process.env.ENVIRONMENT_NAME || 'Dev'; 

app.get('/', (req, res) => {
  res.send(`Hello, Argo CD!!! This is our ${environment} environment.`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
