setInterval(()=> {}, 1e6);

process.on("SIGUSR1", ()=>{
    console.log("Got a signal!");
});

process.on("SIGINT", ()=> {
    console.log("We received the SIGINT signal!");
});

