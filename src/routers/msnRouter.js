import express from "express";
import * as msnController from '../controllers/msnController.js'

const routerMsn = new express.Router();

routerMsn.get("/", msnController.getMensajes);
routerMsn.post("/", msnController.createMsn);
routerMsn.delete("/:id", msnController.deleteMsn);

export default routerMsn;