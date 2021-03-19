//->Podemos crear proceos secundarios para ejecutar otros programas
const {exec} = require('clid_process');

exec(err, stdout){
    if(err){
        console.log(err);
    }
}
