const fs = require('fs');
const path = require('path');
const Turno = require('../models/Turno');

const dataPath = path.join(__dirname, '../data/turnos.json');

function leerTurnos() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

function guardarTurnos(turnos) {
  fs.writeFileSync(dataPath, JSON.stringify(turnos, null, 2));
}

class TurnoController {
  static listar(req, res) {
    const turnos = leerTurnos();
    res.render('turnos', { title: 'Listado de Turnos', turnos });
  }

  static crear(req, res) {
    const turnos = leerTurnos();
    const { cliente, fecha, hora } = req.body;
    const nuevoTurno = new Turno(turnos.length + 1, cliente, fecha, hora);
    turnos.push(nuevoTurno);
    guardarTurnos(turnos);
    res.status(201).json(nuevoTurno);
  }

  static obtener(req, res) {
    const turnos = leerTurnos();
    const turno = turnos.find(t => t.id === parseInt(req.params.id));
    if (!turno) return res.status(404).json({ error: 'Turno no encontrado' });
    res.json(turno);
  }

  static eliminar(req, res) {
    let turnos = leerTurnos();
    turnos = turnos.filter(t => t.id !== parseInt(req.params.id));
    guardarTurnos(turnos);
    res.json({ message: 'Turno eliminado' });
  }
}

module.exports = TurnoController;
