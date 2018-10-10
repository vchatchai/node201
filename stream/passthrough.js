const fs = require('fs')
const stream = require('stream')
const spy = new stream.PassThrough();



spy
.on('error', (err) => console.error(err))
.on('data', function(chuck){
    console.log(`spied data -> ${chuck}`);
})
.on('end', () => console.log('\nfinished'));

fs.createReadStream('passthrough.txt').pipe(spy).pipe(process.stdout);