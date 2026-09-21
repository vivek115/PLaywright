import fs from 'fs';

//Bring the file handling capability of Node.js

// fs helps javascript to open files, read files, write files, and delete files.

export default class JsonUtil{

    static readJson(filePath){
        const jsonData = fs.readFileSync(filePath);
        //Open the JSON file and read its content.              
        return Json.parse(jsonData);
    }

};