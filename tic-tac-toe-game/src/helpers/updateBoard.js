import confetti from "canvas-confetti"
import { calculateWin } from "./calculateWin";



export const updateBoard = (index, board, setBoard, turnos, turn, setTurn, setWinner, checkEndGame)=> {
    if(board[index] || calculateWin(board)) return;

    const newTurn = (turn === turnos.x) ? turnos.o : turnos.x;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(newTurn);
    const newWin = calculateWin(newBoard);
    if(newWin){
        setWinner(newWin);
        confetti();
    }else if (checkEndGame(newBoard)) {
        setWinner(false);
    }
}