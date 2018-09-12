const https = require('https')

const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'

https.get(url, function(response) { 
    let rawData = '';
    response.on('data', function(chunk){
        rawData += chunk;
    });
    response.on('end', function(){
        try{
            const parseData = JSON.parse(rawData);
            console.log(parseData);
        }catch(e){
            console.error(e)
        }
    }).on('error', function(err){
        console.log(`Got error: ${err.message}`)
    });
} );