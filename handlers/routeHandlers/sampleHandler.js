// module scaffolding
const handler = {};

handler.sampleHandlers = (requestProperties, callback) => {
  callback(200, {
    message: 'Sample url response message',
  });
};

module.exports = handler;
