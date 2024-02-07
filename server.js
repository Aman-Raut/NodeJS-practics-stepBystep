const http = require('http');

http.createServer((req, resp)=>{
    resp.write("hello duniya");
    resp.end();
}).listen(4300);
