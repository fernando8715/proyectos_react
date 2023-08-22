import './App.css'
import { Board } from './components/Board';
import { Square } from './components/Square';


export const App = () => {
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <Board />
      
    </main>
  )
}
