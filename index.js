const http = require('http')
const forward = require('http-forward')

var server = http.createServer(function (req, res) {
    console.log(req.url)
    console.log(req.headers.dev_id)
    req.forward = { target: 'http://0.0.0.0:5050/fkwebserver' }
    forward(req, res)
})

server.listen(5051,'0.0.0.0')