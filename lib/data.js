// dependencies
const fs = require('fs');
const path = require('path');

const database = {};

// base directory of the data foldker
database.baseDir = path.join(__dirname, './../.data/');

// write data to file
database.create = function (dir, file, data, callback) {
  // open file for writing
  fs.open(`${database.baseDir}${dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // convert data to string
      const stringData = JSON.stringify(data);

      // write data to file then close it
      fs.writeFile(fileDescriptor, stringData, (error) => {
        if (!error) {
          fs.close(fileDescriptor, (error3) => {
            if (!error3) {
              callback(false);
            } else {
              callback('Error closing new data file');
            }
          });
        } else {
          callback('Error writing data to new file');
        }
      });
    } else {
      callback('Could not create new file, it may exits!');
    }
  });
};

module.exports = database;
