
const PORT = 3000;
const express = require('express');
const path = require('path');
const app = express();

//Coloquei o app.use /public para que ele consiga pegar o .css dentro da pasta public/styles
app.use(express.static(__dirname + '/public'));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", 'ejs');

app.get('/', (req, res)=>{
    res.render("index");
})

app.get('/sobre', (req, res) => {
    res.render("sobre")
})

app.get('/cursos', (req, res) => {
    res.render("cursos")
})

app.get('/contato', (req, res) => {
    res.render("contato")
})

app.get('/pais', (req, res) => {
    res.render('login-pais')
})

app.get('/professor', (req, res) => {
    res.render('login-professor')
})



app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})