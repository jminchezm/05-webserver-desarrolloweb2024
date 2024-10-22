//Servir un sitio web completo
const express = require('express');
const app = express();
const port = 8080;

//Servir contenido estático public2 donde está el templated
app.use(express.static('public2')); //Middelware para la carpeta public2

app.get('/', (req, res) => {
    res.send('Homa Page');
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public2/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public2/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening at htpp://localhost:${port}`);
})
