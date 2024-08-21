

import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    apellido:{
        type: String,
        required: true,
        trim: true
    },
    dni:{
        type: String,
        required: true,
        trim: true
    },
    photoName:{
        type: [String],
        required: true,
        trim: true
    },
    fecha: [String]
})

export default mongoose.model("Cliente", ClienteSchema)


