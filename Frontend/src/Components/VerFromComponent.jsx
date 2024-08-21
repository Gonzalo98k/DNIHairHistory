/* eslint-disable react/prop-types */

import { useSendData } from "../Hooks/useSendData";
import { useState } from "react";

export const VerFormComponent = (props) => {
    const { data, isLoading, fetchingData, err } = useSendData();

    const [value, setValue] = useState("")

    const handleInputChange = async (e) => {
        const { value } = e.target;
        parseInt(value)
        await setValue(value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchingData(value)
    };

    return (
        <>
            <div className="flex justify-center m-5">
                <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4">
                    <h2 className="text-2xl font-bold mb-6">Ver Clientes</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                {props.input}
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni">
                                {props.input2}
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dni"
                                type="text"
                                placeholder="DNI"
                                name="dni"
                                onChange={handleInputChange}
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

                    </form>
                </div>
            </div>

            {<div>
                {(
                    Array.isArray(data) ? (
                        // Si data es un array, itera sobre cada elemento
                        data.map(item => (
                            <div key={item._id}>
                                <ul className="flex flex-col items-center p-4 bg-blue-500 rounded-lg shadow-md space-y-2">
                                    <li className="text-white text-lg font-semibold">
                                        {`Nombre: ${item.nombre}`}
                                    </li>
                                    <li className="text-white text-lg font-semibold">
                                        {`Apellido: ${item.apellido}`}
                                    </li>
                                    <li className="text-white text-lg font-semibold">
                                        {`Fecha del Corte: ${item.fecha.map(j => j).join("/")}`}
                                    </li>
                                </ul>


                                <div className="bg-gray-100 p-4 shadow-md flex justify-center flex-row flex-wrap gap-4">
                                    {item.photoName.map(i => (
                                        <img
                                            key={i}
                                            src={`http://localhost:3000/uploads/${i}`}
                                            alt="cliente"
                                            className="w-1/5 h-auto object-cover max-w-xs max-h-60 p-2"
                                        />
                                    ))}
                                </div>

                            </div>
                        ))
                    ) : (
                        // Si data no es un array, trata data como un solo objeto
                        <li key={data._id}>{data.nombre}</li>
                    )
                )}
            </div>}
        </>
    );
};