// dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createSever = function () {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handle request response
app.handleReqRes = function (req, res) {
  // response handle
  res.write('hi');
  res.end('hello world!');
};

app.createSever();
