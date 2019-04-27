/* global data */

const fs = require('fs');

fs.readFile('words.txt', 'utf8', function (error, data){
    if (error) throw error; // throw error
    var content = data.split('\n');
    console.log(content);
});
    
module.exports = fs;

