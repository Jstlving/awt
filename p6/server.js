const http=require('http');

// function dataControl(req,resp){
//     resp.write("<h1>hello this is mukti patel</h1>");
//     resp.end();

// }
// http.createServer(dataControl).listen(4500);



http.createServer((req,resp)=>{
    resp.write("hello this is mukti patel");
        resp.end();
}).listen(4500);
  
