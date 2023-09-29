
export const consultarCriptos = async() => {

    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    const respuesta = await  fetch(url);
    const data = await respuesta.json();
    
    const criptos = data.Data.map(cripto => {
        const {Name, FullName} = cripto.CoinInfo
        const obj = {
            id: Name,
            nombre: FullName
        }
        return obj
    })
    return criptos;
}
