![alt tag](./client/assets/i2x-logo.png)

## Summary
This challenge is a part from i2x interview process to Basim Hennawi.

It's a simple React app with two views:
1. Login Page (/login)
2. List recordings page (/list-recordings)

This is built using React framework along with FLUX/Redux archeticture according to the requirements mentioned in the [challenge](./challenge.pdf).

## Usage

#### Basic

Clone the repository to your local directory.

Install all dependencies and start reviewing:
```bash
$ npm install
$ npm start
```

Launch your favorite web browser and go to `http://localhost:8080`.

#### Testing

Run all client-side test files, using Jest, that contain some unit-tests:

```bash
$ npm run test
```

#### Linting

Check the code applies all linting configuration bu running:

```bash
$ npm run lint
```

#### Routes

- **/login**
-- This page will get you a simple form with two textboxes and button to enter your email `challenge@i2x.ai` and password `pass123` to login and can access the other view.
- **/list-recordings**
-- This page will get you a list view of the meta data of the recodings along with an audio player and logout button at top-right.


## Project Structure


    ├── client                          - All of the client side code resides in this folder
    │   ├── assets                      - Images and other static files
    │   ├── components                  - React components, and messages files
    │   ├── modules                     - Reusable modules
    │   ├── pages                       - React page components with their tests
    │   │   ├── App                     - App page component
    │   │   │   ├── tests               - Page comp. js test files
    │   ├── tests                       - Root client js test files
    │   ├── utils                       - Util files with its tests
    │   │   │   ├── tests               - Util js test files
    │   ├── index.html                  - HTML template file used by html-webpack-plugin
    │   └── index.js                    - Client entry point
    ├── package.json                    - List of dependencies

#### Deployment

**Step 1**: Create a Procfile with the following line: web: npm run start:prod. We do this because Heroku runs npm run start by default, so we need this setting to override the default run command.

**Step 2**: Install the Node.js buildpack for your Heroku app by running the following command: heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs#v91 -a [your app name]. Make sure to replace #v91 with whatever the latest buildpack is, which you can find here.

**Step 3**: Add this line to your package.json file in the scripts area: "heroku-postbuild": "npm run build",. This is so Heroku can build your production assets when deploying (more of which you can read about here). Then, adjust the prebuild script in your package.json file so it looks like this: "prebuild": "npm run build:clean", to avoid having Heroku attempt to run Jest tests (which are unsupported with this buildpack).

**Step 4**: Run heroku config:set NPM_CONFIG_PRODUCTION=false so that Heroku can compile the NPM modules included in your devDependencies (since many of these packages are required for the build process).

**Step 5**: Follow the standard Heroku deploy process:
```
git add .
git commit -m 'Made some epic changes as per usual'
git push heroku master
```

Finally, you got link to live demo on Heroku: [https://basimhennawi-i2x.herokuapp.com/](https://basimhennawi-i2x.herokuapp.com/)
## Technologies

### Frameworks
[React](https://facebook.github.io/react) - A JavaScript library for building user interfaces. It introduces many great concepts, such as, Virtual DOM, Data flow, etc.

[Express](http://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

[Redux-saga](https://github.com/redux-saga/redux-saga) - Redux-saga is a library that aims to make side effects (i.e. asynchronous things like data fetching) in React/Redux applications easier and better.

### Module bundler & Syntax transformers
[Webpack](https://webpack.github.io) - Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules.

[Babel](https://babeljs.io) - Babel is a JavaScript compiler which allows you to  use next generation, ES6/ES7, JavaScript, today.

### Languages
[ES6/ES7](https://github.com/lukehoban/es6features) - ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard. ES6 is a significant update to the language.

[JSX]( https://facebook.github.io/react/docs/jsx-in-depth.html) - JSX is a JavaScript syntax extension that looks similar to XML. You can use a simple JSX syntactic transform with React.

### Designs
[StyledComponents](https://github.com/styled-components/styled-components) - Styled components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier.

[Google Material Design (Material UI)](https://github.com/callemall/material-ui) - Material UI is a set of React components that implement Google's Material Design specification.

### Additional Tools
[Jest](https://facebook.github.io/jest/) - Jest is a complete and easy to set up JavaScript testing solution. In fact, Jest works out of the box for any React project.

[ImmutableJs](https://facebook.github.io/immutable-js/) - Immutable data cannot be changed once created, so minimal data change needed consequently minimal React components re-rendering.

[Eslint](http://eslint.org) - The pluggable linting utility for JavaScript and JSX.

[Nodemon](http://nodemon.io) - Monitor for any changes in your node.js application and automatically restart the server.

### Finally!

Happy reviewing, Santhoush! :)
