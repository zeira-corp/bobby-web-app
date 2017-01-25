const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.post(`/hey/iam/bob/:room`, (req, res) => {
  console.log(req.body, req.params);
  res.status(201).end();
});

app.listen(port);
console.log(`🌍 Web Application is started - listening on ${port}`);
