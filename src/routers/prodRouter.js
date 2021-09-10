import express from "express";
import * as prodControllers from "../controllers/prodControllers.js";

export const routerProd = new express.Router();

routerProd.get("/", prodControllers.getProducts);
routerProd.post("/", prodControllers.createProduct);
routerProd.delete("/:id", prodControllers.deleteProduct);
routerProd.put("/:id", prodControllers.updateProduct);

export default routerProd;
