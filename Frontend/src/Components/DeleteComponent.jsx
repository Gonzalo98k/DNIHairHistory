

import { useState } from "react"
import { useSendData } from "../Hooks/useSendData.jsx"
export const DeleteComponent = () => {
    const { deleteData, delData } = useSendData()
    const [formValue, setFormValue] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        await deleteData(formValue)
    }

    const handleChange = (e) => {
        const { value } = e.target
        setFormValue({
            ...formValue,
            dni: value
        })
    }
    return (
        <>
            <div className="flex justify-center m-5">
                <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4">
                    <h2 className="text-2xl font-bold mb-6">Ver Clientes</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            </label>
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
                                onChange={handleChange}
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

            {delData && (
                <ul className="flex flex-col items-center p-4 bg-blue-500 rounded-lg shadow-md space-y-2">
                    <li className="text-white text-lg font-semibold"> {delData} </li>
                </ul>
            )}
        </>
    )
}
