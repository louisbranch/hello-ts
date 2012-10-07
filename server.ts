/// <reference path="node.d.ts"/>

import http = module("http");
import response = module("./response");

var server = http.createServer(function(req, res) {
  var msg = {ok: true, message: 'Content exist'};
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(response.toJson(msg));
});

server.listen(8000);
