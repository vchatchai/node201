let fs = require('fs')
fs.open('fstat.js', 'r', (err, fd) => { 
    console.log(fd);

    fs.close(fd, err => { 
        console.log(err)
    });
})
