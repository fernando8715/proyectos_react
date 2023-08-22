import { useState } from "react";
import { Square } from "./Square"
import { updateBoard } from "../helpers/updateBoard";
import { ResultGame } from "./ResultGame";
import { Turnos } from "./Turnos";
import { handlerReset } from "../helpers/handlerReset";


export const Board = () => {

    const turnos = {x: 'X', o: 'O'}
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(turnos.x);
    const [winner, setWinner] = useState(null);

    const handleUpdate = (index)=> {
        updateBoard(index, board, setBoard, turnos, turn, setTurn, setWinner, checkEndGame );
    }

    const onResetGame = ()=> {
        handlerReset(setBoard, setTurn, setWinner, turnos)
    };

    const checkEndGame = (newBoard)=> {
        return newBoard.every(square => square !== null)
    }


  return (
    <>
        <button onClick={onResetGame}>Reset Game</button>
        <section className="game">
            {board.map((c, index)=> {
                return (
                <Square 
                    key={index}
                    index={index}
                    updateBoard={handleUpdate}
                    >
                    {c}
                </Square>
                )
            })}
        </section>

        <Turnos turn={turn} turnos={turnos}/>

        <ResultGame winner={winner} onResetGame={onResetGame}/>

    </>
  )
}
