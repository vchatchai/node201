const  fs = require('fs')
const path = require('path')


currentfile = path.join('./', 'fs.js');

fs.stat(currentfile, (err, stats) => { 
    if(err) { 
        console.log(err)
    }
    console.log('stats.isFile()',stats.isFile());
    console.log('stats.isDirectory()',stats.isDirectory());
    console.log('stats.isBlockDevice()',stats.isBlockDevice());
    console.log('stats.isCharacterDevice', stats.isCharacterDevice());
    console.log('stats.isSocket', stats.isSocket());
    console.log(stats);
})