const http = require('http')

http.get('http://www.example.org', response => { 
    response.setEncoding('utf8');
    response.on('data', function(data){ 
        console.log(data)
    });
}).on('error', err => {
    console.log("Error: "+ err.message);
})