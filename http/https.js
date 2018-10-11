const https = require('https')
const fs =require('fs')

let count =0 
https.createServer({
    key:fs.readFileSync('server-key.pem'),
    cert:fs.readFileSync('server-cert.pem')
},(req,res) => { 
    console.log('request')
    res.writeHead(200, {
        'Content-Type':'text/plain'
    });
    res.write(`https created${count++} `)
    res.end()

 
}).listen(8443);
 