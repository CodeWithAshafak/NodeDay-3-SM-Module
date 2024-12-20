const fs = require("fs");
fs.open("open.txt","w",(err,file)=>{
  if(err) throw err;
  console.log("File created by opne method");
  
});