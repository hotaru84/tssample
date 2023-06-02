var server = require("ws").Server;
var s = new server({port:5000});
console.log("start");
s.on("connection",(ws)=>{
    console.log("connect");
    ws.on("message",(msg)=>{
        s.clients.forEach((client) =>{
            console.log("send:" + msg);
            for(i = 0; i < 10; i++){
                client.send(msg.toString() + i);
            }
        });
    });
    ws.on("close",() =>{
        console.log("Closed.");
    })
})