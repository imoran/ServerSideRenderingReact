import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// Tells express that it needs to treat public directory as static and available to public
app.use(express.static('public'));

// listen to root route of application
app.get('*', (req, res) => {
  const store = createStore();
  //load data in store and have logic to initialize
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
