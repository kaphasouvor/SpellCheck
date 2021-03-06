// console.log("server running");
const express = require('express');
const fs = require('./data.js');

// function call of express..
const app = express();
const port = process.env.PORT || 8000; 
// process.env.PORT || 5000; // if running file locally it will not have process.evn.PORT but runs 5000 instead. Testing.....

console.log(fs);

// .get api call. Anonymous function: request.
// and respose object and using send method(hello world)
app.get('/', function (req, res){
    const s_word = req.query.word;
    res.send('Word you entered' + s_word + '!')
});

// When port is use. It needs to know which door to go into. ex:3000
// Call back function.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
