var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var userInfo = {
        'ipaddress': '',
        'language': '',
        'software': ''
};

app.get('/', (req, res) => {
    var language = req.headers.accept-language;
    userInfo.language = language;

    console.log(req.headers);
    res.end(JSON.stringify(userInfo));
    
});

app.listen(port, () => {
    console.log('App is listening on port '+port+'!');
});