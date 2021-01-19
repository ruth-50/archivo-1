const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

const port= process.env.PORT || 3000;
app.get('/',(req, res)=>{

    let obj={
        nombre: 'Ruth',
        edad: 51,
        url:req.url
    }
    res.send(obj)
    
    //res.send('Hola Ruth')
})



   
    


app.listen(port, ()=>{
    console.log((`Èscuchando el puerot ${port}`));

});
