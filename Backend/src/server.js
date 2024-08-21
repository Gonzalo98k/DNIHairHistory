/* eslint-disable no-undef */

import express from "express"
import { config } from "dotenv"
import { routing } from "./controllers/routes.js"
import { join } from "path"
import cors from "cors"
config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', routing);

app.use('/uploads', express.static(join(process.cwd(), "uploads")));


export const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on the port ${process.env.PORT}`);
    })
}

// app.options("/", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Methods", "POST, GET, PUT")
//     res.header("Access-Control-Allow-Headers", "Content-Type")

//     res.status(200).send()
// })