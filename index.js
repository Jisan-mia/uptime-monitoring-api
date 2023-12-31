// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const database = require('./lib/data');
// app object - module scaffolding
const app = {};

// testing file system
// database.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
//   console.log(err);
// });

database.read('test', 'newFile', (err, data) => {
  console.log(err, data);
});
database.update('test', 'newFile', { playerName: 'Mosfique', age: '40' }, (err) => {
  console.log(err);
});
database.read('test', 'newFile', (err, data) => {
  console.log(err, data);
});
database.delete('test', 'newFile', (err) => {
  console.log(err);
});
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
