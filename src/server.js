import "./db.js";
import "./database/dbMsn.js"
import express from "express";
import routerProd from "./routers/prodRouter.js";
import routerMsn from "./routers/msnRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/productos", routerProd);
app.use("/mensajes", routerMsn)

app.listen(8080, () => console.log("Server on port 8080"));
