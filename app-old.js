const http= require('http');

http.createServer((req, res)=>{
   res.writeHead(200, {'content-type' : 'application/json'})

    let obj={
        nombre: 'Ruth',
        edad: 51,
        url:req.url
    }
    
    res.write(JSON.stringify(obj))

    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');