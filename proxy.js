/*
功能：nodeJS转发请求实现跨域访问
时间：2018-8-29
*/

const PORT = 8090;

var request = require('request');

var express = require('express');
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, Cache-Control, Pragma');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
});

app.use(function (req, res) {
    var realUrl = 'https://api.douban.com/v2' + req.url.replace('/api','/');
    console.log(realUrl, req.url);

    var options = {
         url: realUrl,
         method: req.method,
         json: true
    }; 
    
    request(options, function(_err, _res, _resBody){
        res.json(_resBody);
    })
});

var searver = app.listen(PORT, () => {
    console.log(`Litened At http://localhost:${PORT}`);
});


// var server= http.createServer(function (request, response) {
//     var pathName = url.parse(request.url).pathname.replace('/api','/');

//     var options = {
//          host: 'api.douban.com',
//          method: request.method,
//          path: '/v2' + pathName
//     };    
//     console.log(options);

//     var content = '';

//     var req = http.request(options, function(res) {
//         // console.log('Status: ' + res.statusCode); 
//         // console.log('Headers: ' + JSON.stringify(res.headers));

//         res.on('data',function(body){
//             //console.log('Body: ' + body);
//             content += body;
//         }).on('end', function () {
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write(content);
//             response.end();
//         });
//     }).on('error', function(e) {
//         console.log('Got error: ' + e.message);
//     });

//     req.end();
// });