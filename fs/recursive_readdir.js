const fs = require('fs')
const p = require('path')


let walk = (path) => { 
    fs.realpath(path,(err, realpath)=>
    {
        if(err){
            console.log(err.message);
            return;
        }
        fs.readdir(realpath, (err, files)=> { 
            files.forEach( file =>{ 
                let fullpath = p.join(realpath,file)
                fs.stat(fullpath, (staterr, stat) => { 
                    if(staterr){
                         console.log(staterr.message, fullpath);
                         return;
                    }
                    if(stat.isDirectory()){
                        walk(fullpath)
                    }else{
                        console.log(fullpath)
                    }
                });
            });
        });
    });
}
walk(".");