
import Cliente from "../mongoDB/mongoSchema.js"
import { saveImage } from "../saveImage.js"
import { eliminarImagenes } from "./eliminarImagenes.js"

let fecha = new Date()

console.log(fecha.getMonth() + 1);

// Trae usuarios especificos de la base de datos
export const getData = async (req, res) => {

    const dni = req.params.dni
    console.log(req.params.dni);
    res.header("Access-Control-Allow-Origin", "*")

    if (dni.length != 8 || typeof dni != "string" || null) {
        res.send("dni incorrectamente")
        return
    } else {
        try {
            const fetchingData = await Cliente.findOne({ dni: dni })
            console.log(fetchingData);
            res.send(fetchingData)
        } catch (error) {
            console.log(error);
        }
    }



}

// Sube documentos a mongo db
export const submitData = async (req, res) => {
    const DNI = req.body.dni
    console.log(req.body);
    const data = await Cliente.findOne({ dni: DNI })
    res.header("Access-Control-Allow-Origin", "*")


    if (data) {
        res.send("DNI incorrecto, ya hay un cliente con ese DNI")
        console.log("DNI incorrecto, ya hay un cliente con ese DNI");
        let arr = []
        req.files.map(img => {
            arr.push(img.filename)
        })
        eliminarImagenes(arr)

    } else {

        const { nombre, apellido, dni } = req.body

        if (nombre && apellido && dni.length == 8) {
            req.files.map(saveImage)
            console.log(req.files);
            res.send("Nuevo cliente creado")


            let arr = req.files.map(img => `${img.filename}-${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()}.jpg`);

            console.log(arr);
            console.log(req.body);

            const newReqBody = {
                ...req.body,
                photoName: arr,
                fecha: [fecha.getDate(), fecha.getMonth() + 1, fecha.getFullYear()]
            }

            try {
                const cliente = await new Cliente(newReqBody)

                cliente.save()
                console.log("Nuevo cliente creado");
            } catch (error) {
                console.log(error);
            }
        } else {
            res.send("Error al recibir los datos por favor revise los datos").status(400)
            console.log("Error al recibir los datos por favor revise los datos");
            let arr = []
            req.files.map(img => {
                arr.push(img.filename)
            })
            eliminarImagenes(arr)
        }
    }
}

// Actualiza documentos ya guardados en la base de datos
export const updateData = async (req, res) => {
    const newData = req.body;
    const DNI = req.params.dni;
    res.header("Access-Control-Allow-Origin", "*")


    const data = await Cliente.findOne({ dni: DNI })
    const { dni } = data

    console.log(DNI);

    if (dni) {
        eliminarImagenes(data.photoName)
        req.files.map(saveImage)

        const { dni } = newData

        let arr = req.files.map(img => `${img.filename}-${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()}.jpg`);



        const newReqBody = {
            ...newData,
            photoName: arr,
            fecha: [fecha.getDate(), fecha.getMonth() + 1, fecha.getFullYear()]
        }
        console.log(newReqBody);

        try {
            await Cliente.updateOne({ dni: DNI }, { $set: newReqBody })
            res.send("Cliente actualizado correctamente")
        } catch (error) {
            console.log(error);
            res.status(400)
        }

    } else {
        res.send("Error al actualizar los datos, revise los datos").status(400)
        console.log("Error al intentar actualizar los datos, revise los datos");
    }
}

// Elimina documentos de la base de datos

export const deleteData = async (req, res) => {
    try {

        const { dni } = req.params
        console.log(dni);


        const response = await Cliente.findOne({dni: dni})
        console.log(response.photoName);
        eliminarImagenes(response.photoName)
        await Cliente.deleteOne({dni: dni})
        
        res.send("Se eliminó correctamente")

    } catch (error) {
        console.log(error);

    }
}