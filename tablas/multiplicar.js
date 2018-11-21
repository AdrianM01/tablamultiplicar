const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${ base } no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor ${ limite } no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${ i * base} \n`);
        }

        resolve(`${ data }`);
    })

}

crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += (`${base} * ${i} = ${ i * base} \n`);
        }

        fs.writeFile(`tablas/tabla ${ base }.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla${ base }.txt`);

        })
    });

};

module.exports = {
    crearArchivo,
    listarTabla
};