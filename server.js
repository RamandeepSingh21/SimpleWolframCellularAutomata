const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {

    if(req.url == "/"){

        fs.readFile("./index.html", (error, data) => {

            if(error){console.log(error);}
            else{
    
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else if(req.url == "/app.js"){

        fs.readFile("./app.js", (error, data)=>{

            if(error){console.log(error);}
            else{

                res.writeHead(200, {'Content-Type':'text/javascript'});
                res.write(data);
                res.end();
            }
        })
    } else if(req.url == "/WCA.js"){

        fs.readFile("./WCA.js", (error, data)=>{

            if(error){console.log(error);}
            else{

                res.writeHead(200, {'Content-Type':'text/javascript'});
                res.write(data);
                res.end();
            }
        })
    }     
})

server.listen(port, (error) => {

    if(error){console.log(error);}
    else{console.log(`listening at port ${port}`);}
} )
