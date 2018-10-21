const fs = require('fs')

fs.open('open.js', 'r', (err, fd) => {
    fs.fstat(fd,( err, stats) => { 
        let totalBytes = stats.size;
        let buffer  = Buffer.alloc(totalBytes);
        let bytesRead = 0;
        let read = chucksize => { 
            fs.read(fd,buffer,bytesRead,chucksize,bytesRead, (err, numBytes, bufRef)=> {
                console.log(bytesRead, chucksize,numBytes,totalBytes);
                if((bytesRead += numBytes) < totalBytes){
                    return read(Math.min(512,totalBytes-bytesRead))
                }
                fs.close(fd)
                console.log(`File read complete. Total bytes read: ${totalBytes}`);
                console.log(bufRef.toString())
            });
        }
        console.log("read");
        read(Math.min(512,totalBytes));
    });
});