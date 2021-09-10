import { db } from "../db.js";

import { Contenedor } from "../contenedor.js";
const contProductos = new Contenedor(db, "productos");

export async function getProducts() {
  try {
    const productos = await contProductos.getDB().select();
    return productos;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createProduct(data) {
  try {
    await contProductos.getDB().insert(data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteProduct(id) {
  try {
      await contProductos.getDB().del().where('id', id)
      return
  } catch (error) {
      throw new Error(error);
  } 
}

export async function updateProduct(id, data) {
  try {
      await contProductos.getDB().update(data).where('id', id)
      return
  } catch (error) {
      throw new Error(error);
  } 
}