export const obtenerClientes = async()=> {
    // utilizando como url una variable de entorno que esta en el archivo .env
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const datos = await respuesta.json();
    return datos;
}

export const agregarCliente = async(datos)=> {
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}