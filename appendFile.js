const  fs = require("fs");

fs.appendFile("myfile.txt","content rehega",(err)=>{
  if(err) throw err;
  console.log("file succesfully created");
  
})