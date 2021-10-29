const { json } = require("express");
const express = require("express");
const routes = require('./routes');
const app = express();

const PORT = 3000;

app.use(json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNING AT ===> http://localhost:${PORT}`);
});
