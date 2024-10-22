const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

//Utilización de hbs para el renderizado de la página web
app.set('view engine', 'hbs');

//Uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático public3 donde está el templated
app.use(express.static('public3')); //Middelware para la carpeta public3

app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Josué Mínchez',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Josué Mínchez',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Josué Mínchez',
        titulo: 'Curso de Node'
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening at htpp://localhost:${port}`);
})