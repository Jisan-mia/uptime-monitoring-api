// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');

// module scaffolding
const handler = {};

handler.handleReqRes = function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/$/g, '');

  const method = req.method.toLowerCase();
  const queryString = parsedUrl.query;
  const headersObject = req.headers;

  const decoder = new StringDecoder();
  let realData = '';

  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();
    console.log(realData);
    res.end('Hello World!');
  });
};

module.exports = handler;
