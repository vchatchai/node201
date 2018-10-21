const fs = require('fs')

fs.readdir(".",{encoding: 'utf8'}, (err, files)=>{
    files.forEach( file => {
        fs.stat(file, (err, stat) => { 
            if(stat.isDirectory()){
                return console.log(`Found directory: ${file}`)
            }
            console.log(`Found file: ${file}`)
        })
    })
})