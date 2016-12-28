var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var os = require('os');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/whoami', function(req,res){
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    // os.hostname()
    // os.platform()
    var returnObj = {
      "ipaddress": ip,
      "language": req.headers["accept-language"].split(',')[0],
      "Software": os.platform() + '; ' + os.hostname()
    }
    res.send(returnObj);
});

app.get('*', function(req,res){
    res.send('Please navigate to: /api/whoami');
});

var port = process.env.PORT || 8080;

app.listen(port);
console.log("Express listening on port: ", port)
