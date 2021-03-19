// El modelo os ofrece informacion acerca de la plataforma donde se ejecuta nodejs
const os = require("os");
// La variable os almacena una referencia al módulo 'os' y mediante esta
// referencia podemos acceder a las variables, funciones, objetos etc. que el módulo exporta

console.log("Sistema operativo", os.platform());
console.log(`Version del Sistema ${os.release}`);
console.log("Nombre de la maquina", os.hostname);

console.log("Memoria libre:" + os.freemem());
const vec = [];
for (let f = 0; f < 1000000; f++) {
  vec.push(f);
}
console.log("Memoria libre después de crear el vector:" + os.freemem());
