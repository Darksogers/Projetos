const express = require("express");
const app = express();
const bodyParser = require('body-parser');

//Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

//Configurando bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",(req,res) =>{
    
    res.render("index",{
        
    })
})

app.get("/perguntar", (req,res) =>{
    
    res.render("perguntar",{
        
    })
})

app.post("/salvarpergunta", (req,res) =>{
    
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    res.send("Titulo " + titulo + "Descricao " + descricao)
})

app.listen(4000,()=>{console.log("Pegando de boas");})