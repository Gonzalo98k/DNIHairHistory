
import { useSendData } from "../Hooks/useSendData";
import { useState } from "react";

export const ActualizarComponent = () => {

    const { updateData, updateInfo } = useSendData()
    const [images, setImages] = useState([])
    const [formValues, setformValues] = useState({
        dni: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setformValues({
            ...formValues,
            [name]: value
        })
    }

    const handleFormData = async (e) => {
        const { files } = e.target
        const formData = new FormData()

        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i])
        }

        await setImages(formData)

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        updateData(images, formValues)
    }
    return (
        <>
            <div className="flex justify-center m-5">
                <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4">
                    <h2 className="text-2xl font-bold mb-6">Formulario de Registro</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni">
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dni"
                                type="text"
                                placeholder="DNI"
                                name="dni"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagenes">
                                Imágenes
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="imagenes"
                                type="file"
                                multiple
                                name="image"
                                onChange={handleFormData}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Enviar
                            </button>
                        </div>
                        <div className="flex justify-center m-2">
                        </div>
                    </form>
                </div>
            </div>

            {updateInfo && (
                <ul className="flex flex-col items-center p-4 bg-blue-500 rounded-lg shadow-md space-y-2">
                    <li className="text-white text-lg font-semibold"> {updateInfo} </li>
                </ul>
            )}


        </>
    )
}
