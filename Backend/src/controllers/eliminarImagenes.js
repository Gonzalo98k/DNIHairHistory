/* eslint-disable no-undef */

import fs from "fs"
import path from "path";

export const eliminarImagenes = (img) => {

    // Utiliza map para iterar sobre cada imagen y obtener la ruta absoluta
    img.map(imagen => {
        const filePath = path.join(process.cwd(), 'uploads', imagen);

        console.log(`Ruta absoluta del archivo: ${filePath}`);

        // Elimina el archivo usando fs.unlink
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Error al intentar eliminar el archivo ${imagen}: ${err}`);
            } else {
                console.log(`Archivo "${imagen}" fue eliminado`);
            }
        });
    });

}