import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'
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

            return req.on('end', async () => {
                try{
                    const parsedData = JSON.parse(body);
                    const pathToFile = path.join(__dirname, 'data', 'data.txt')
                    const {date, amountPaid, pricePerOz, boughtOz} = parsedData
                    const stringToAppend = `${date}, amount paid: ${amountPaid}, price per Oz: ${pricePerOz}, gold sold: ${boughtOz} Oz,\n`
                    
                    await fs.appendFile(
                        pathToFile,
                        stringToAppend,
                        'utf8'
                    )

                    return sendResponse(res, 200, 'application/json', JSON.stringify({ message: "Data saved successfully!" }))
                
                }catch(err){

                    console.error("Error with saving data", err)
                    return sendResponse(res, 500, 'application/json', JSON.stringify({ message: "Internal Server Error" }))
                
                }

            });
        }

    await serveStatic(req, res, __dirname)

})

 
server.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`)
})