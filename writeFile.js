const fs = require("fs");
fs.writeFile("writeF.pdf", "file created by WriteFile Method", (err) => {
  if (err) throw err;
  console.log("file created");
});
