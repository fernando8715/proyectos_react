import { Square } from "./Square"

export const ResultGame = ({winner, onResetGame}) => {
    if(winner !== null)

    return (
    
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
                        onClick={onResetGame} 
                        className="control">
                            Empezar de nuevo
                    </button>
                </footer>
            </div>
        </section>
    )

}
