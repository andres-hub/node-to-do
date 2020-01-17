const colors = require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.tarea)
        console.log(tarea);
        break;
    case 'listar':
        let lista = toDo.listar()
        for (const tarea of lista) {
            console.log('=====Tarea por hacer====='.green);
            console.log(tarea.tarea);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        let actualizar = toDo.update(argv.tarea, argv.estado)
        console.log(actualizar);
        break;
    case 'borrar':
        let borrar = toDo.borrar(argv.tarea)
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}