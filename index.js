const appliences = require("./appliences");
const fs = require("fs");
appliences.btn1.status = 1;
console.log(appliences);
fs.writeFile("./appliences.json", JSON.stringify(appliences));
