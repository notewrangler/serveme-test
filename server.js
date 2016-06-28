var express = require('express');
var app = express();

var PORT = 3000;
var thisDate = function() {
    var td = new Date().toString();
    return td;
}

var middleware = {
    logger: function(req, res, next) {
        console.log(thisDate() + ' ' + 'Request: ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Express Yourself!...Port:' + PORT);
})
