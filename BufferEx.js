var b=new Buffer(300);//stores 300 characters
b.write("NodeJS is a light weight platform");//write data to buffer
console.log("data in buffer:"+b.toString());//read data from buffer

console.log("5-25 position:"+b.toString('ascii',5,25));
console.log("5-25 position:"+b.toString('utf8',5,25));
console.log();
for (i=0;i<25;i++)
{
    process.stdout.write(String.fromCharCode(b[i]));

}
process.stdout.write("\n");
    //console.log(String.fromCharCode(b[i]));//printds each char in a separate line
