import { useState } from "react";
import { Square } from "./Square"
import {calculateWin} from '../helpers/calculateWin'
import confetti from "canvas-confetti"




export const Board = () => {

    const turnos = {x: 'X', o: 'O'}
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(turnos.x);
    const [winner, setWinner] = useState(null);

    const updateBoard = (index)=> {
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
                            <button onClick={resetGame}>Empezar de nuevo</button>
                        </footer>
                    </div>
                </section>
            )
        }
    </>
  )
}
