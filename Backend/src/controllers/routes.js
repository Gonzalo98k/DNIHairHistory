
import express from "express"
import { uploads } from "../multer.js"
import { getData, submitData, updateData, deleteData } from "./endpoints.js"
export const routing = express.Router()


// Trae usuarios especificos de la base de datos

routing.get("/read/:dni", getData)

// Sube documentos a mongo db

routing.post("/", uploads, submitData)

// Actualiza documentos ya guardados en la base de datos

routing.put("/update/:dni", uploads, updateData)

routing.delete("/delete/:dni", deleteData)