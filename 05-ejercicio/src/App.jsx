import {Year} from './components/Year';
import './App.css';

export const App = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div>
      <h1>App año</h1>

      <Year year={year}/>
    </div>
  )
}
