const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');

app.use(express.json())
app.use(express.urlencoded(({extended:true})))
app.use(cors());

app.use('/', routes);


app.listen(9000, ()=>{
    console.log('El servidor esta activo en el puerto:9000');
})