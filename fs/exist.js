const fs = require('fs')

fs.exists('open.js', (exist) =>{
    console.log("Exist ? :", exist)
})