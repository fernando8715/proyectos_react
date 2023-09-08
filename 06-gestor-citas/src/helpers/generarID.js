
export const generarID = ()=> {
    const date = Date.now().toString(36);
    const num = Math.random().toString(36).substr(2);

    return date + num
}