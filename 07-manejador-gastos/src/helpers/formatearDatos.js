// Formatear un string a un tipo de moneda

export const formatoDinero = (cantidad)=> {
    return cantidad.toLocaleString('es-US', {
        style:'currency', 
        currency: 'USD'
    })
}

// Formatear el valor del Date.now a una fecha facil de leer
export const formatoFecha = (fecha) => {
    const newFecha = new Date(fecha);
    const opciones = { 
        year:"numeric", 
        month:"long", 
        day:"2-digit"
    }
    return newFecha.toLocaleDateString('es-ES', opciones);
}
