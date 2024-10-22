/* 
* Ejercicio - Servir contenido estático 
* Se enfoca en sustituir la impresión de mensajes
* contenido estático, en este caso páginas web.
*/

const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public')); //Middelware para la carpeta public

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta');
})

app.get('*', (req, res) => {
    res.send('404 | Page not found');
})

app.listen(port, () => {
    console.log(`Example app listening at htpp://localhost:${port}`);
})
