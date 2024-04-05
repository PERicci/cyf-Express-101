import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
})

app.get('/chocolate', (req, res) => {
  let chocolateAmount = parseInt(req.query.amount);
  if (isNaN(chocolateAmount) || chocolateAmount < 1) {
    res.send('Please provide a number bigger than 0 for the amount of chocolate.');
    return;
  }
  res.send(`Gimme ${chocolateAmount} chocolate${chocolateAmount === 1 ? '' : 's'}`);
})

app.get("/json", (req, res) => {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});

app.get("/multiply", (req, res) => {
  let value1 = req.query.value1;
  let value2 = req.query.value2;
  if (isNaN(value1) || isNaN(value2)) {
    res.send('Please provide numbers for both values.');
    return;
  }
  res.send(`The result of ${value1} multiplied by ${value2} is ${value1 * value2}`);
});

app.get('/node', (req, res) => {
  res.send('Node is great!');
})

app.get('/codeyourfuture', (req, res) => {
  res.send('CodeYourFuture is the best!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
})