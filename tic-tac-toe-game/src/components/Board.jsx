import { useState } from "react";
import { Square } from "./Square"
import {calculateWin} from '../helpers/calculateWin'



export const Board = () => {

    const turnos = {x: 'X', o: 'O'}
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(turnos.x);

    const updateBoard = (index)=> {
        if(board[index] || calculateWin(board)) return;

        const newTurn = (turn === turnos.x) ? turnos.o : turnos.x;
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);
        setTurn(newTurn);
        calculateWin(newBoard);
    }


  return (
    <>
        <section className="game">
            {board.map((c, index)=> {
                return (
                <Square 
                    key={index}
                    index={index}
                    updateBoard={updateBoard}
                    >
                    {c}
                </Square>
                )
            })}
        </section>
        <section className="turn">
            <Square isSelected={turn === turnos.x}>{turnos.x}</Square>
            <Square isSelected={turn === turnos.o}>{turnos.o}</Square>
        </section>
    </>
  )
}
