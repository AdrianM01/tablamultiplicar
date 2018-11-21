const { crearArchivo, listarTabla } = require('./tablas/multiplicar');
const { argv2 } = require('./config/yargs');
var colors = require('colors');

let commando = argv2._[0];


switch (commando) {
    case 'listar':
        listarTabla(argv2.base, argv2.limite)
            .then(data => console.log(`Tabla del ${argv2.base} con limite ${argv2.limite}: \n${ data }`.green))
            .catch(err => console.log(err));
        break;
        break;
    case 'crear':
        crearArchivo(argv2.base)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log("Comando no reconocido");


}

// console.log(argv2.limite);


// crearArchivo(argv2.base)
//     .then(archivo => console.log(`Archivo creado ${ archivo }`))
//     .catch(err => console.log(err));