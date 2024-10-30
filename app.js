const http = require('http');
const PORT = 9000;
const HOSTNAME = 'localhost';
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/task')){


    }
    else{
        res.writehead(404,'not found',{'content_type':'application/json'
        });
            res.end(JSON.stringify({
                message:'page not found'
            }))
        }
     });