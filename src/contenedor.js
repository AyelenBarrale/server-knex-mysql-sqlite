export class Contenedor {
  constructor(database, tabla) {
    this.database = database;
    this.tabla = tabla;
  }

  getDB() {
    return this.database(this.tabla)
  }
}

