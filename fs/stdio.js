let fs = require('fs')

console.log(process.stdin.fd);
console.log(process.stdout.fd);
console.log(process.stderr.fd);

fs.fstat(1, (err, stats) => { 
    console.log(stats)
})

