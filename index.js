var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var userInfo = {
        'ipaddress': '',
        'language': '',
        'software': ''
};
//{"ipaddress":"24.80.0.15","language":"en-US","software":"Windows NT 10.0; WOW64"}
app.get('/', (req, res) => {

    "\"::ffff:10.154.74.169\""
    console.log(req.headers);
    // console.log(req.headers['x-forwarded-for']);
    var ipAddress = req.connection.remoteAddress.split(':').pop();
 
    console.log(ipAddress);

    userInfo.ipaddress = ipAddress;
    var language = JSON.stringify(req.headers['accept-language']);
    var shortLang = language.split('"')[1].split(',')[0];
    userInfo.language = shortLang;

    var software = JSON.stringify(req.headers['user-agent']);
    var softwareSplit1 = software.split('(')[1].split(')')[0];
    userInfo.software = softwareSplit1;
    
    res.end(JSON.stringify(userInfo));
});

app.listen(port, () => {
    console.log('App is listening on port '+port+'!');
});