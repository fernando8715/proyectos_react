const obtenerClientes = async()=> {
    // utilizando como url una variable de entorno que esta en el archivo .env
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const datos = await respuesta.json();
    return datos;
}

const obtenerCliente = async(id)=> {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const cliente = await respuesta.json();
    return cliente;
}

const agregarCliente = async(datos)=> {
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

const actualizarCliente = async(datos, id)=>{
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
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

const eliminarCliente = async(id) => {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'DELETE'
        })
        await respuesta.json();
    } catch (error) {
        console.log(error);
    }
}

export {
    obtenerClientes,
    obtenerCliente,
    agregarCliente,
    actualizarCliente,
    eliminarCliente
}
