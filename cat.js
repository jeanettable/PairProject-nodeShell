const fs = require('fs');

//ln 5: fileName = file passed in, and show parameter is prompt **from bash.js
module.exports = (fileName, show) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      show(err.stack);    //will show stack trace
    } else {
      show(data);   //will show fileName contents
    }
  });
};

// console.log(module.exports);    // --> [Function]