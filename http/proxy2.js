const http = require('http');
const net  = require('net');
const url = require('url');
const proxy = new http.Server();

proxy.on('connect', (request, clientsocket, head) => {

    let reqdata = url.parse(`http://${request.url}`);
    let remotesocket = net.connect(reqdata.port,reqdata.hostname, () => {
        clientsocket.write('HTTP/1.1 200 \r\n\r\n');
        remotesocket.write(head);
        remotesocket.pipe(clientsocket);
        clientsocket.pipe(remotesocket);
    });
}).listen(8080);



let request = http.request({
    port:'8080',
    hostname:'localhost',
    method: 'CONNECT',
    path:'www.example.org:80'
})

 
request.end();

request.on('connect', (res,socket,head) => { 
    socket.setEncoding('utf8');
    socket.write('GET / HTTP/1.1\r\nHost: www.example.org:80\r\nConnection:close\r\n\r\n');
    socket.on('readable',() => { 
        console.log(socket.read());
    });

    socket.on('end',()=>{
        proxy.close();
    });

});
    