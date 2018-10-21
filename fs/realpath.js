const fs = require('fs')
fs.realpath('open.js', (err, resolvepath) => { 
    if(err){
        console.log(err)
    }
    console.log(resolvepath);
})