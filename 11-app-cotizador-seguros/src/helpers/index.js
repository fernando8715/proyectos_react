
export const obtenerDiferenciaYear = (year) => {

    return new Date().getFullYear() - year
};


export const calcularCotizacion = (base, diferenciaYear, marca, plan)=> {

    let total = base 
    
    total += base * (diferenciaYear * 0.03);

    switch (marca) {

        case '1':
            total += base * 0.30;
            break;

        case '2':
            total += base * 0.15;
            break;

        case '3':
            total += base * 0.05;
            break;

        default:
            break;
    }
    
    total += (plan === '1') ? (base * 0.2) : (base * 0.5);

    return total
}


export const formatearDinero = (valor) => {
    return valor.toLocaleString("en-US", {style: "currency", currency: "USD"})
}
