const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8080;
let l = []
let temps = []
class Temp {
    constructor(time,temp){
        this.time = time
        this.temp = temp
    }
}
Temp.prototype.toSring = (temp) =>{
    return temp.time.toSring() + "|" + temp.temp.toSring()
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');   
  console.log("hello world")
  console.log(req.url)
  console.log(hostname + ":" + port + req.url)
  l.push(req.url)
  console.log(l)
  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject)
  temps.push(new Temp(queryObject.time,queryObject.temp));  
  console.log(temps)
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});