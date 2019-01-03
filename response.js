var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response) {
    console.log("Request handler random was called.");
    response.writeHead(200, {"Content-Type": "application/json"});
    var otherObject =  [
      {
        Name:"Ajithkumar G D",
        Idcardno:459540,
        AssociateNo:1465408,
      },
      {
        Name:"Chakra",
        Idcardno:459542,
        AssociateNo:1465406,
      },
      {
        Name:"mannan",
        Idcardno:459541,
        AssociateNo:1465407,
      }
    ];
    var json = JSON.stringify({ 
      anObject: otherObject, 
    });
    response.end(json);
}).listen(8079);