var http = require('http');
var url = require("url");

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
	 var uri = url.parse(request.url).pathname;
	if(uri.toLowerCase()=="/log")
    {
        fs.readFile("../../LogFiles/Application/index.html" ,function(error,data){
            if(error){
               response.writeHead(404,{"Content-type":"text/plain"});
               response.end("Sorry the page was not found"+error);
            }else{
               response.writeHead(202,{"Content-type":"text/html"});
               response.end(data);

            }
        });
    }
    else
    {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
}
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.port || 8383);
