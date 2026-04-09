import http from 'node:http'

const PORT = 8000


const server = http.createServer((req, res) =>{
    res.end(console.log("Working"))
})


server.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`)
})