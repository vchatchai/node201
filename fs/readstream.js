const fs = require('fs')

fs.createReadStream(__dirname +"/open.js" ).pipe(process.stdout)