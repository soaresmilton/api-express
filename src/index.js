const { json } = require("express");
const express = require("express");
const routes = require('./routes');
const app = express();

require('express-async-errors');


const PORT = 3000;

app.use(json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNING AT ===> http://localhost:${PORT}`);
});
