const fs = require('fs')

fs.rename('open.js', 'opened.js', function(err) {
    if(err){
        console.log(err.message)
        fs.rename('opened.js', 'open.js', (err) => {
            if(err){
                console.log(err.message)
            }
        }) ;
    }
} )