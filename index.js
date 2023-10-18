// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
// app object - module scaffolding
const app = {};

// create server
app.createSever = function () {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`listening to port ${environment.port}, NODE_ENV: ${environment.envName}`);
  });
};

// handle request response
app.handleReqRes = handleReqRes;

app.createSever();
