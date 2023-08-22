import { useState } from "react";
import { Square } from "./Square"
import { updateBoard } from "../helpers/updateBoard";
import { ResultGame } from "./ResultGame";


export const Board = () => {

    const turnos = {x: 'X', o: 'O'}
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(turnos.x);
    const [winner, setWinner] = useState(null);

    const handleUpdate = (index)=> {
        updateBoard(index, board, setBoard, turnos, turn, setTurn, setWinner, checkEndGame );
    }

    const resetGame = ()=> {
        setBoard(Array(9).fill(null));
        setTurn(turnos.x);
        setWinner(null)
    }

    const checkEndGame = (newBoard)=> {
        return newBoard.every(square => square !== null)
    }


  return (
    <>
        <button onClick={resetGame}>Reset Game</button>
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
        <section className="turn">
            <Square isSelected={turn === turnos.x}>{turnos.x}</Square>
            <Square isSelected={turn === turnos.o}>{turnos.o}</Square>
        </section>

        {
            (winner !== null) && (
                <section className="winner">
                    <div className="text">
                        <h2>
                            {
                                (winner === false)
                                    ? 'empate'
                                    : 'Gano'
                            }
                        </h2>
                        {
                            (winner) &&
                            <header className="win">
                                <Square>{winner}</Square>
                            </header>
                        }

                        <footer>
                            <button 
                                onClick={resetGame} 
                                className="control">
                                    Empezar de nuevo
                            </button>
                        </footer>
                    </div>
                </section>
            )
        }
    </>
  )
}
