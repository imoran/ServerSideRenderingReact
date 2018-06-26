import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// Tells express that it needs to treat public directory as static and available to public
app.use(express.static('public'));

//listen to root route of application
app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  //send this content to user that requests the GET

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>

  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
