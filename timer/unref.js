
let intervalid = setInterval(() => { 
    console.log("running");
},1);

setTimeout(()=> { 
    intervalid.unref();
    console.log("now stop");
},100);

setTimeout(()=> { 
    intervalid.ref();
    console.log("now run");
},200);

setTimeout(()=> { 
    intervalid.unref();
    console.log("now stop");
},300);