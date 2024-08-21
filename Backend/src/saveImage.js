
import fs from "fs"
const fecha = new Date()

export const saveImage = (file)=>{
    const newPath = `./uploads/${file.filename}-${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()}.jpg`
    fs.renameSync(file.path, `${newPath}`)

}