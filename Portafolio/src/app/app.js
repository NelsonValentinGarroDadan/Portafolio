const express = require('express');
const app = express();
const router = require('./router/router');

const statics = __dirname.replace("app","public")

app.set("port", process.env.PORT || 8000);
app.use(express.static(statics));
app.use(router);

module.exports = app;
