var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var os = require('os');

app.get('*', function(req,res){
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var returnObj = {
      "ipaddress": ip,
      "language": req.headers["accept-language"].split(',')[0],
      "Software": os.platform() + '; ' + os.hostname()
    }
    res.send(returnObj);
});

var port = process.env.PORT || 8080;

app.listen(port);
console.log("Express listening on port: ", port)
