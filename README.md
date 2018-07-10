# Server Side Rendering

A traditional React app is rendered on the browser.

How a traditional React gets content on the screen:

* Browser requests page (pause) --> Browser requests JS file (pause) --> React apps boots, requests JSON --> Content is visible

The goal of server side rendering is to get content to the user as quickly as possible

How a SSR app gets content on the screen:

* Browser requests page --> Content is visible


## For SSR apps, its best practice to have 2 backend servers:

* One API server (handles the application/business logic)
* One rendering server (handles the view layer -- takes data and produces HTML)

Why? if you mix the two, you might discover it might be difficult to replace the rendering side (say you want to use Angular) also it's easier to scale

React SSR is very computationally intensive, so it's better to have it run small instances and have a heavier API server.

Electrode can improve React SSR speed by 70%

### Creating the project

* Server and application logic goes into src folder
* ReactDOM library has a function called renderToString -- it takes a bunch of React components and render them one time, converts output to raw HTML, then a string.


First Problem -- you need your Node.js to be able to recognize the JSX component you're trying to render.

Solution: Use Webpack/Babel to transpile JSX code to ES5

Second problem -- need to turn components into HTML

Solution: Use 'react-dom/server' libraries 'renderToString' function

Third ProbleM -- Server only serves HTML, no JavaScript, so any event handlers are not usable

Solution: Create two separate bundles using Webpack

Bundle #1: Contains server code and Client-Side React code.

Bundle #2: Contains Client-Side React code that is shipped to browser

We separate the two in the case that server code has sensitive inforMation that you do not want to ship to browser


### "Hydration" - Adding functionality to the DOM that was already rendered


* --watch reruns Webpack everytime it senses a change
* nodemon restarts server everytime it senses a change

### Server Side Rendering -- Generate HTML on the server

### Universal JavaScript -- Same code runs on the server and browser

### Isomorphic JavaScript -- Same code runs on the server and browser

Useful NPM Modules:

* webpack-merge: an NPM module that allows you to merge parts of webpack config files
* npm-run-all: NPM module that allows you to run multiple script commands
* webpack-node-externals: having webpack preventing from bundling some files


Routing

In traditional React apps, the Browser Router looks at the URL in address bar (does not work in server).

When we build SSRs there are no URLS, so we need to, instead, have two routers:

-StaticRouter - For use when running SSR (initial startup)
* Useful in SSR where the user isn't actually clicking around, so the location never changes.

-Browser Router - For use when running in a browser


**1 set of routes, two different set of routers**

4 Big Redux Challenges

1.) Redux needs different configuration on server and browser

2.) Aspects of authentication needs to be handled on server. Normally this is done on browser!

3.) Need a way to detect when all initial data load action creators are completed on server


4.) Need state rehydration on the browser


In order to fix this, you must have 2 redux stores, one for the client and one for the server.
