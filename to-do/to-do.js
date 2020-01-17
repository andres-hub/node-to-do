const fs = require('fs');

let listaTareas = [];

const saveDb = () => {
    let data = JSON.stringify(listaTareas);
    fs.writeFile(`./db/db.json`, data, (error) => {
        if (error) throw new Error('No se pudo grabar', error)
    })
}

const loadDb = () => {
    try {
        listaTareas = require('../db/db.json')
    } catch (error) {
        listaTareas = []
    }

}

const crear = (tarea) => {
    loadDb()
    let toDo = {
        tarea,
        completado: false
    }
    listaTareas.push(toDo)
    saveDb();
    return toDo;
}

const listar = () => {
    loadDb()
    return listaTareas
}

const update = (tarea, completado = true) => {
    loadDb()
    let index = listaTareas.findIndex(data => { return data.tarea === tarea })
    if (index >= 0) {
        listaTareas[index].completado = completado;
        saveDb();
        return true;
    } else
        return false;
}

const borrar = (tarea) => {
    loadDb();
    let newList = listaTareas.filter(data => { return data.tarea !== tarea });
    if (newList.length === listaTareas.length)
        return false;
    else {
        listaTareas = newList;
        saveDb();
        return true;
    }
}

module.exports = {
    crear,
    listar,
    update,
    borrar
}