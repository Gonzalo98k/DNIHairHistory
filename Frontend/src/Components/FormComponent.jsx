/* eslint-disable react/prop-types */

import { useSendData } from "../Hooks/useSendData";
import { useState } from "react";

export const FormComponent = (props) => {
    const { data, isLoading, sendData, response } = useSendData();
    const [files, setFiles] = useState([]);
    const [formValues, setFormValues] = useState({
        nombre: '',
        apellido: '',
        dni: ''
    });

    const images = (e) => {
        const selectedFiles = e.target.files;
        setFiles(selectedFiles);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append('images', files[i]);
        }

        for (const key in formValues) {
            formData.append(key, formValues[key]);
        }

        await sendData(formData);
    };

    return (
        <>
            <div className="flex justify-center m-5">
                <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4">
                    <h2 className="text-2xl font-bold mb-6">Formulario de Registro</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                value={formValues.nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="apellido"
                                type="text"
                                placeholder="Apellido"
                                name="apellido"
                                value={formValues.apellido}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni">
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dni"
                                type="text"
                                placeholder="DNI"
                                name="dni"
                                value={formValues.dni}
                                onChange={handleInputChange}
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
                                onChange={images}
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
                            {response && <h4>{response}</h4>}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
