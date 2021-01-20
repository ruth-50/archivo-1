app.get('/',(req, res)=>{

    let obj={
        nombre: 'Ruth',
        edad: 51,
        url:req.url,
        practicando: 'un objeti dentro de una carpeta'
    }
    res.send(obj)
    
    //res.send('Hola Ruth')
})