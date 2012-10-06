/// <reference path="node.d.ts"/>

import http = module("http");

var server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.end('Request received\n');
});

server.listen(8000);
