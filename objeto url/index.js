const http = require('http');
const url = require('url');


const server = http.createServer((req, res) =>{
    const objeto_url = url.parse(req.url);
    /**
     * Podemos obtener mas informacion acerca del objeto url pero
     * solo utilizare la propiedad path
     */
    console.log('Ubicacion completa del archivo y parametros: '+ objeto_url.path);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Bienvenido');
    res.end();
});

// algunos navegadores como el Chrome la primera vez que acceden a
// un sitio piden un recurso (el archivo favicon.ico) y es eso por lo que se ejecuta
// dos veces la función anónima, una para solicitar el archivo 'pagina1.html' y otra 
// para solicitar el archivo 'favicon.ico' 

server.listen(8080);
console.log("Servidor Iniciado...");