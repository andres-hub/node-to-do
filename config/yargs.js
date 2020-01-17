const opts = {
    tarea: {
        demand: true,
        alias: 't'
    },
    estado: {
        alias: 'e',
        default: false
    }
}

const argv = require('yargs').command('crear', 'Crea la tarea', opts)
    .command('listar', 'lista las tareas por hacer')
    .command('actualizar', 'Actualiza las tareas', opts)
    .command('borrar', 'borra una tarea en especifico', opts).help().argv;

module.exports = {
    argv
}