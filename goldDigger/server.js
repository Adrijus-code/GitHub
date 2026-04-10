import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { sendResponse } from './utils/sendResponse.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async(req, res) =>{

    if(req.url === '/api'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        const goldData = {
            price: (2000 + Math.random() * 10).toFixed(2),
            status: "success"
        };

        return res.end(JSON.stringify(goldData))
    }

    if (req.url === '/api/save' && req.method === 'POST') {
            let body = ``;
            req.on('data', chunk => { body += chunk.toString(); });

            return req.on('end', () => {
                const parsedData = JSON.parse(body);
                console.log(parsedData)
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: "Data saved successfully!" }));
            });
        }

    await serveStatic(req, res, __dirname)

})


server.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`)
})