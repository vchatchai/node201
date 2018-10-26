const fs = require('fs')
const readline = require('readline')

let rl = readline.createInterface({
    input: fs.createReadStream('readfile.js'),
    terminal: false
});

let arr =  [];
rl.on('line', ln => {
    // console.log(ln)
    arr.push(ln.trim())
});

rl.on('close', () => { 
    console.log(arr)

})
