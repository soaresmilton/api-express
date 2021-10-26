const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.listen(PORT, () => {
  console.log(`SERVER IS RUNING AT ===> http://localhost:${PORT}`);
})