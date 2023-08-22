import { Square } from "./Square"


export const ResultGame = (winner) => {

    if(winner !== null)

  return (

    <>
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
    </>

    )
}