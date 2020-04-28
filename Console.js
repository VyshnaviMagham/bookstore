console.log("hi how r u?");
console.warn("syste is running out of memory");
if(!(process.argv.length>2))
    console.error("must pass some parameters");
else    
    console.log("welcome to console");
console.log("file name:"+__filename);
console.log("directory name:"+__dirname);        