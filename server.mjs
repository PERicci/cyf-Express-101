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

app.get('/node', (req, res) => {
  res.send('Node is great!');
})

app.get('/codeyourfuture', (req, res) => {
  res.send('CodeYourFuture is the best!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
})