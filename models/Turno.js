class Turno {
  constructor(id, cliente, fecha, hora, estado = "pendiente") {
    this.id = id;
    this.cliente = cliente;
    this.fecha = fecha;
    this.hora = hora;
    this.estado = estado;
  }
}

module.exports = Turno;