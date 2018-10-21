const fs = require('fs')
fs.chmod('rename.js', '777', function(err){
    if(err){
        console.log(err)
    }
    fs.stat('rename.js', (err, stat) => { 
        console.log('mode',stat.mode) 
    })

})
