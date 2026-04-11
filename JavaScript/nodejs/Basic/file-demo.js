const fs=require("fs");

fs.writeFileSync("data.txt", "File created using Node.js");

console.log("File created successfully");

const data=fs.readFileSync("data.txt","utf-8");

console.log("File content:", data);