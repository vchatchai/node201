let exec =  require('child_process').exec;
exec("file --brief --mime parent.js", (err ,mime) => { 
    console.log(mime);
});