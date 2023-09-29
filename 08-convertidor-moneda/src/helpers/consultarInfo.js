
export const cotizar = async(moneda, cripto)=> {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    const {PRICE, HIGHDAY, LOWDAY, LASTUPDATE,IMAGEURL} = data.DISPLAY[cripto][moneda];
    const obj = {
        precio: PRICE,
        mayorPrecio: HIGHDAY,
        menorPrecio: LOWDAY,
        ultimaActualizacion: LASTUPDATE,
        imagen: `https://www.cryptocompare.com/${IMAGEURL}`
    };
    return obj
}

