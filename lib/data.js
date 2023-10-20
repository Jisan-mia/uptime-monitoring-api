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
// read data from file
database.read = function (dir, file, callback) {
  fs.readFile(`${database.baseDir}${dir}/${file}.json`, 'utf8', (err, data) => {
    callback(err, data);
  });
};

// updating existing file
database.update = function (dir, file, data, callback) {
  fs.open(`${database.baseDir}${dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // convert data to string
      const stringData = JSON.stringify(data);
      fs.ftruncate(fileDescriptor, (err2) => {
        if (!err2) {
          // write to the file and close it
          fs.writeFileSync(fileDescriptor, stringData, (err3) => {
            if (!err3) {
              fs.close(fileDescriptor, (err4) => {
                if (!err4) {
                  callback(false);
                } else {
                  callback('Error closing file while updating data');
                }
              });
            } else {
              callback('error writing to file');
            }
          });
        } else {
          console.log('Error truncating file');
        }
      });
    } else {
      console.log('Error updating, file may not exist');
    }
  });
};

// delete existing file
database.delete = function (dir, file, callback) {
  // unlink file
  fs.unlink(`${database.baseDir}${dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback('Error deleting/unlinking file');
    }
  });
};

module.exports = database;
