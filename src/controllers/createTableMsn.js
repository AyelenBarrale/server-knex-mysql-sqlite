import { db } from "../database/dbMsn.js";
(async function () {
  try {
    const exist = await db.schema.hasTable("mensajes");
    console.log(exist);
    if (exist) {
      await db.schema.dropTable("mensajes");
    }

    await db.schema.createTable("mensajes", (table) => {
      table.uuid("id").primary().notNullable();
      table.string("author", 50).notNullable();
      table.string("text", 300).notNullable();
    });
    console.log("Tabla creada");
  } catch (error) {
    console.log(error);
  } finally {
    db.destroy();
  }
})();
