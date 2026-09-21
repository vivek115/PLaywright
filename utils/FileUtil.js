import fs from 'fs';

//fs can open files, read files, write files, and delete files.

export default class FileUtil{

  static fileExists(filePath){
    return fs.existsSync(filePath);
    //Check if the file exists at the given filePath.
  }

  static deleteFile(filePath){
    if(fs.existsSync(filePath)){
      fs.unlinkSync(filePath);
      //Delete the file at the given filePath.
    }
  }

  static readFile(filePath){
    return fs.readFileSync(filePath, 'utf-8');

  }

  static writeFile(filePath, data){
    fs.writeFileSync(filePath, data);
    //Write the data to the file at the given filePath.
  }

  // setInputFile(filePath, data){
  //   fs.writeFileSync(filePath, data);
  //   //Write the data to the file at the given filePath.
  // }
};