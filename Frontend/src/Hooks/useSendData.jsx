
import { useState, useEffect } from "react";

export const useSendData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [response, setResponse] = useState([])
    const [err, setErr] = useState("")
    const [delData, setDelData] = useState([])

    const [updateInfo, setUpdateInfo] = useState([])

    const fetchingData = async (value) => {
        try {
            const res = await fetch(`http://localhost:3000/read/${value}`, {
                method: "GET",
            });

            let response = await res.json()
            setData([response])
            setIsLoading(false)
        } catch (error) {
            setErr("Error al ingresar ese dni")
        }
    };

    const sendData = async (formData) => {
        try {
            let res = await fetch("http://localhost:3000", {
                method: "POST",
                body: formData
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            let response = await res.text();
            setResponse(response)
            console.log(response);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    const updateData = async (images, formValues) => {
        try {
            let res = await fetch(`http://localhost:3000/update/${formValues.dni}`, {
                method: "PUT",
                body: images
            });

            const response = await res.text()
            setUpdateInfo(response)
        } catch (error) {
            console.log(error);

        }


    }
    const deleteData = async (formValues) => {
        try {
            let res = await fetch(`http://localhost:3000/delete/${formValues.dni}`, {
                method: "DELETE",
            });

            let response = await res.text()
            setDelData(response)

        } catch (error) {
            console.log(error);

        }

    }

    return {
        fetchingData,
        sendData,
        updateData,
        deleteData,
        data,
        updateInfo,
        isLoading,
        response,
        err,
        delData

    };
};
