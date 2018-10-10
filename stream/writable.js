const stream = require('stream')

let  writable = new stream.Writable({
    decodeStrings: false,
    highWaterMark: 15000
});

writable._write = (chunk, encoding, callback) => {
    console.log(chunk.toString());
    callback();
};

let written =writable.write(Buffer.alloc(32000,'A'))
writable.end();

console.log(written);