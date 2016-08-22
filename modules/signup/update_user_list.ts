const fs = require('fs');
const path = require('path');

import UserData from "./data_type";

// var pathString = path.join(__dirname, './config', 'user_info.json');
let pathString = './config/user_info.json';

const readFileAsync = function(path: string, cb: (data:any) => void) {
  fs.readFile(path, function(err: Error, data: any) {
    if(err) {
      console.log(err);
      return;
    }

    cb(JSON.parse(data));
  });
}


const updateUserList = ({userid, userName, password, telephone}: UserData, callback: (param: boolean) => void) => {
  let userExists = false;

  readFileAsync(pathString, (data) => {
    if(data[userid]) {
      callback(false);
    }

    data[userid] = {
      id: userid,
      password: password,
      phone: telephone,
      fullName: userName
    }

    fs.writeFile(pathString, JSON.stringify(data, null, 2), () => {
      callback(true);
    });
  });
}

export default updateUserList;
