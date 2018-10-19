const fs = require('fs')
const path = require('path')



let statfile = path.normalize('stat.js')



fs.open(statfile, 'r', (err, fd) => { 

    fs.fstat(fd, (err, fstats) => {
        if(err){
            console.error(err)
        }
    
        console.log('fstats.isFile',fstats.isFile())
        console.log(fstats)

        
    })
})
