//include modules
const http = require('http')
const ext = require('./externalFunctionExample.js')

const hostname = '127.0.0.1'
const port = 3001;


const server = http.createServer((req, res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.write(ext.testFunction() +'\n')
  res.write(req.url)
  res.end("Hello world!\n")
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
