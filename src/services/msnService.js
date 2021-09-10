import { db } from "../database/dbMsn.js";

import { Contenedor } from "../contenedor.js";
const contMensajes = new Contenedor(db, "mensajes");

export async function createMsn(data) {
  try {
    await contMensajes.getDB().insert(data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMensajes() {
  try {
    const mensajes = await contMensajes.getDB().select();
    return mensajes;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteMsn(id) {
  try {
    await contMensajes.getDB().del().where("id", id);
    return;
  } catch (error) {
    throw new Error(error);
  }
}
