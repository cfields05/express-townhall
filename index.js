const express = require('express');
const bodyParser = require('body-parser');
const loggify = require('./loggify');
const app = express();
const port = 3000;

// Middleware usage
app.use(loggify);
app.use(bodyParser.json());

name = 'user';
greeting = 'Hello';

// Routes
// Create routes for any of the HTTP verbs: .get(), .post()
app.get('/', (req, res) => {
  res.send(`${greeting}, ${name}!`)
});

app.get('/dangerzone', (req, res) => {
  res.send('Watch out! Evil Rowan is after us!');
});

app.post('/greeting', (req, res) => {
  greeting = req.body.greeting;
  res.send('Greeting set!')
})

app.post('/name', (req, res) => {
  const incomingName = req.body.name;
  name = incomingName;
  res.send(`${incomingName} is the current user!`);
});

app.delete('name', (req, res) => {
  name = null;
  res.send('Got a delete request at /name!');
});

// The listen method from the express is used to start the server.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
