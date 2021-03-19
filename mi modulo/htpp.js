const http = require("http");

// createServer esta implementado en el modulo http para crear un servidor con protocolo http
const servidor = http.createServer((pedido, respuesta) => {
  // pedido => contiene el nombre del archivo que solicitamos

  respuesta.writeHead(200, ("Content-Type", "text/plain"));
  respuesta.write("Pablo Ruiz");
  respuesta.end;
});
servidor.listen(8080);
console.log("servidor iniciado...");
