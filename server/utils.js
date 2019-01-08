const fs = require('fs');

const readFile = (path, opts = 'utf8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, opts, (err, data) => {
      if(err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = { readFile };
