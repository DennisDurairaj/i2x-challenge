var express = require('express');
var path = require('path');

const port = process.env.PORT || 9000;

const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(port, function() {
  console.log("Server running")
})