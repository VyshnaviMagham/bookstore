var net=require('net');
var client=net.connect({port:5300},function(){
    console.log("connected to server");
});
client.write('hello server h r u');
client.on('data',function(data){
    console.log('serever response:'+data.toString());
    client.end();
});
client.on('end',function(){
    console.log('disconnected from server');
});
