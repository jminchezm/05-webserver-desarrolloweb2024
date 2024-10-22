//MANEJO DE RUTAS INVALIDAS

const express = require('express') //Requerimos el paquete EXPRESS
const app = express()

app.get('/', function (req, res) {
    res.send('Home Page')
    /*
    * Acá se está enviando un mensaje directo, pero pordíamos enviar
    * un sitio web, una opción del Sistema, etc.
    */
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
    /*
    * Acá se está enviando un mensaje directo, pero pordíamos enviar
    * un sitio web, una opción del Sistema, etc.
    */
})

app.get('*', function (req, res) {
    res.send('404 | Page not found')
    /*
    * Acá se está enviando un mensaje directo, pero pordíamos enviar
    * un sitio web, una opción del Sistema, etc.
    */
})

app.listen(8080); //Método que permite enviar en que puerto se va a levantar el servidor.