const fs = require('fs');
const path = require('path');

// var pathString = path.join(__dirname, './config', 'user_info.json');
let pathString = './config/user_info.json';

const readFileAsync = function(path, cb) {
  fs.readFile(path, function(err: Error, data: any) {
    if(err) {
      console.log(err);
      return;
    }

    cb(JSON.parse(data));
  });
}

const verifyUser = (userId, password, cb) => {
  let validUser = false;

  readFileAsync(pathString, function(data) {
    let exactData = data[userId];
    if(exactData) {
      if(exactData.id === userId && password === exactData.password) {
        validUser = true;
      }
    }
    cb(validUser);
  });

  return validUser;
}

export default verifyUser;
