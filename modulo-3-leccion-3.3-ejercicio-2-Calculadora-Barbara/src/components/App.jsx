//imports depencencies,images,styles*//

import { useState } from 'react';
// import  from '../images/react.svg'
// import  from
import '../styles/App.scss';

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState('');
  const [total, setTotal] = useState(0);

  const handleNumberA = (ev) => {
    setNumberA(parseInt(ev.target.value));
  };
  

  const handleNumberB = (ev) => {
    setNumberB(parseInt(ev.target.value));
  };

  const handleChange = (ev) => {
    if (ev.currentTarget.value === 'suma') {
      setOperation(ev.currentTarget.value);
      setTotal(numberA + numberB);

      console.log(total);
    } else if (ev.currentTarget.value === 'resta') {
      setOperation(ev.currentTarget.value);
      setTotal(numberA - numberB);
    }
    console.log(ev.currentTarget.value);
  };

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <label>
          Escribe un número:
          <input
            type="number"
            name="numberA"
            onChange={handleNumberA}
            value={numberA}
            id="numberA"
          />
        </label>
        <label>
          Escribe otro número:
          <input
            type="number"
            name="numberB"
            onChange={handleNumberB}
            value={numberB}
            id="numerB"
          />
        </label>
        <label htmlFor="operation">Selecciona una operacion:</label>
        <select name="operation" id="operation" value={operation} onChange={handleChange}>
          <option value="" disabled>Selleciona una operacion</option>
          <option value="suma" id="suma">
            Suma
          </option>
          <option value="resta" id="resta">
            Resta
          </option>
          <option value="multiplicacion" id="multiplica">
            Multiplica
          </option>
          <option value="division" id="divide">
            Divide
          </option>
        </select>
      </form>

      <p>
        La {operation} de <strong>{numberA}</strong> y{' '}
        <strong>{numberB}</strong> es
        <strong> {total}</strong>.
      </p>
    </div>
  );
}

export default App;
