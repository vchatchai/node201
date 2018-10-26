const http = require('http')
const fs = require('fs')
http.createServer((req, res)=> {
    if(req.method !== 'GET'){
        return res.end('Simple File server only does GET');
    }
    let path = __dirname+req.url;
    console.log('path:', path)

    fs
    .createReadStream(__dirname+req.url)
    .pipe(res);
}).listen(8000);