const fs = require('fs');

// To read file
// fs.readFile('7_file.txt', 'utf8', (err, data) => { console.log(data); });
// console.log("File is succesfully read by me.");

// const data = fs.readFileSync('7_file.txt');
// console.log(data.toString());
// console.log("File is successfully read by me.");

// To write file
// const data1 = "This file is written by me";
// fs.writeFile('8_writeFile.txt', data1, (err, data) => { console.log("File is successfully seen by me"); });
// console.log("Finished writing of a file");

// const data2 = "This file is written by you";
// fs.writeFileSync('8_writeFile2.txt', data2);
// console.log("Finished writing of a file");

// To write data at the end
const data3 = "This is also written by me";
fs.appendFile('8_writeFile.txt', data3, (err, data) => { console.log("File is successfully seen by me"); });

