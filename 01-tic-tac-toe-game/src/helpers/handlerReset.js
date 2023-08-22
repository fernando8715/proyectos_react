

export const handlerReset = (setBoard, setTurn, setWinner, turnos)=> {
    setBoard(Array(9).fill(null));
    setTurn(turnos.x);
    setWinner(null)
}