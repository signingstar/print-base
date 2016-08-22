var fs = require('fs');
var path = require('path');

import UserData from "./data_type";

// const LoginData = require("../../config/user_info.json");
// var pathString = path.join(__dirname, './config', 'user_info.json');
let pathString = './config/user_info.json';
console.log(`pathString:${pathString}`);

var readFileAsync = function(path: string, cb: (data:any) => void) {
	fs.readFile(path, function(err: Error, data: any) {
		if(err) {
			console.log(err);
			return;
		}
    console.log(`data read:${data}`);
    cb(JSON.parse(data));
	});
}


const updateUserList = ({userid, userName, password, telephone}: UserData, callback: (param: boolean) => void) => {
  let userExists = false;

  readFileAsync(pathString, (data) => {
    console.log(`data before write:${JSON.stringify(data)}`);
    if(data[userid]) {
      callback(false);
    }
    data[userid] = {
      id: userid,
      password: password,
      phone: telephone,
      fullName: userName
    }
    console.log('file writing');

		fs.writeFile(pathString, JSON.stringify(data, null, 2), () => {
      console.log('file written');
      callback(true);
    });

	});

  return !userExists;
}

export default updateUserList;
