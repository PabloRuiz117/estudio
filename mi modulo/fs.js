const fs = require('fs');

fs.writeFile('./archivo.txt','Ejemplo de Escritura',err =>{
    if(err){
        console.log(err);
    }else{
        console.log('Se ha escrito correctamente');
    }
});

// fs.unlink('./archivo.txt', (err) => {
//     if(err){
//         console.log('Ocurrio un error', err);
//     }else{
//         console.log('Archivo eliminado');
//     }
// });

 fs.readFile('./archivo.txt', (err, data) => {
    if(err){
        console.log('Ha ocurrido un error');
    }else{
        console.log(data.toString());
    }
 });