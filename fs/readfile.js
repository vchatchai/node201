const fs  = require('fs')

fs.readFile('read.js',{encoding: 'utf8'} ,(err, data) => { 
    console.log(data);
})