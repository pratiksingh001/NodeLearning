// const app = require('./app')

// const arr = [2,4,7,1,3]
// console.log(app.z()) 

//http Module :- Handles request and response of server in node.js
const http = require('http')
http.createServer((req,res) => {
    res.write("Hello ji kese ho sarre this iz me");
    res.end();
}).listen(4500)