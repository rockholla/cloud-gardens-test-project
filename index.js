const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('The test cloud garden project is running!');
})

app.listen(3000, function () {
  console.log('Test cloud garden project listening on port 3000!')
})