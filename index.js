const http=require("http");
const getQueryString=require("./getQueryString")

http
.createServer((req, res)=>{
    //res.write('hi');
    //res.writeHead(200,{"Content-Type":"text/html"});
    res.writeHead(200,{"Content-Type":"application/json"});//Mime type
    const queryObject=getQueryString(req.url);
    res.write(JSON.stringify(queryObject));
    //res.write(JSON.stringify({status:"success"}));
    res.end();
})
.listen(8000);