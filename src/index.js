const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();


//listen to root route of application

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  //send this content to user that requests the GET
  res.send(content);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
