import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// Tells express that it needs to treat public directory as static and available to public
app.use(express.static('public'));

//listen to root route of application
app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
