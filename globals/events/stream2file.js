const  fs = require('fs');

let Readable = require("stream").Readable;

let count =0;

let r = new Readable;

r._read =function(){
    count++;
    if(count > 30){
        console.log("done.")
        return r.push(null)
    }

    setTimeout(()=> {
        r.push(count + '\n');
        console.log(`push ${count}`)
    }, 500);
}
const w = fs.createWriteStream('./counter.txt', {flags:'w', mode: 0666});

r.pipe(w)


