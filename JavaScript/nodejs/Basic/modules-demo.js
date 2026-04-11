const os=require("os");
const path=require("path");

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());

console.log("File name:", path.basename(__filename));
console.log("Directory name:", path.dirname(__filename));