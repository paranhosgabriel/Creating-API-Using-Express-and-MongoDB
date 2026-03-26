import express from "express";
import AutorController  from "../controllers/autorController.js";
import app from "../app.js";

const routesAutor = (app)=>{
app.get("/autor",AutorController.listarAutor);
app.get("/autor/:id",AutorController.listarAutorByID);
app.put("/autor/:id",AutorController.updateAutor);
app.post("/autor",AutorController.cadastrarAutor);
app.delete("/autor/:id",AutorController.deleteAutorByID);
//app.put("/autor/:id",AutorController.updateLivro);


}
export default routesAutor;