var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express();

var myLimit = typeof (process.argv[2]) != 'undefined' ? process.argv[2] : '100mb';
console.log('Using limit: ', myLimit);

app.use(bodyParser.json({ limit: myLimit }));

app.all('*', function (req, res, next) {
    // Set CORS headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS' || req.url == "/favicon.ico") {
        res.send();
    }
    else if (req.url == "/") {
        res.send(req.header("host") + "/URL");
    } else {
        var proxyUrl = req.url.substring(1);
        if (proxyUrl.toLowerCase().indexOf("http") != 0) {
            proxyUrl = "http://" + proxyUrl;
        }

        request({ url: proxyUrl, method: req.method, json: req.body, headers: { 'Authorization': req.header('Authorization'), 'User-Agent': req.header('User-Agent'), Cookie: req.header('Cookie') } },
            function (error, response) {
                if (error) {
                    console.log(error.message);
                } else {
                    console.log(response.body);
                }
            }).pipe(res);
    }
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function () {
    console.log('Proxy server listening on port ' + app.get('port'));
});
