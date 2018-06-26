import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';


export default () => {
  const content = renderToString(<Home />);
  //send this content to user that requests the GET

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
