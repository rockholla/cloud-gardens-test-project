require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('This is a test cloud garden project.  Here is the value of our test environment variable: ' + process.env.TEST_PROJECT_ENV_VALUE);
})

app.listen(3000, function () {
  console.log('Test cloud garden project listening on port 3000!')
})