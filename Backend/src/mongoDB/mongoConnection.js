/* eslint-disable no-undef */

import mongoose from "mongoose";
import Cliente from "./mongoSchema.js"
import { config } from "dotenv";
config()

const URI = process.env.URI
export const db = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Conexión a mongoDB exitosa");
    } catch (error) {
        console.log(error);
    }
}