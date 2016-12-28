var express = require('express');
var app = express();

app.get('*', function(req,res){
    var returnObj = {
      "ipaddress": req.header('x-forwarded-for') || req.connection.remoteAddress,
      "language": req.headers["accept-language"].split(',')[0],
      "software": req.headers['user-agent'].split(') ')[0].split(' (')[1]
    }
    res.send(returnObj);
});

var port = process.env.PORT || 8080;

app.listen(port);
// console.log("Express listening on port: ", port)
