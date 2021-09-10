/* import { db } from "../db.js";

(async function () {
  try {
    const exist = await db.schema.hasTable("productos");
    console.log(exist);
    if (exist) {
      await db.schema.dropTable("productos");
    }

    await db.schema.createTable("productos", (table) => {
      table.increments("id").primary().notNullable();
      table.string("title", 40).notNullable();
      table.float("price").notNullable();
      table.string("thumbnail", 500).notNullable();
    });
    console.log("Tabla creada");
  } catch (error) {
    console.log(error);
  } finally {
    db.destroy();
  }
})(); */


/* ---------------------- script generado desde dbeaver --------------------- */