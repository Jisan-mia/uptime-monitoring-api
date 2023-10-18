const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: '404 - Route not found',
  });
};

module.exports = handler;
