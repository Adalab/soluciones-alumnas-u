//imports depencencies,images,styles*//

//import { useState } from 'react'
// import  from '../images/react.svg'
// import  from
import { useState } from 'react';
import '../styles/App.scss';

function App() {
  //funcions,vars,handles
  const [macarrones, setMacarrones] = useState(false);
  const [potatoes, setPotatoes] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [onion, setOnion] = useState(false);
  const [beer, setBeer] = useState(false);

const handleChange = (event)=> {
    console.log(event.target.id);
  
    if (event.target.id === 'potatoes') {
      setPotatoes(event.target.checked);
    } else if (event.target.id === 'beer') {
      setBeer(event.target.checked);
    } else if (event.target.id === 'nuts') {
      setNuts(event.target.checked);
    } else if (event.target.id === 'macarrones') {
      setMacarrones(event.target.checked);
    } else if (event.target.id === 'onion') {
      setOnion(event.target.checked);
    } else if (event.target.id === 'eggs') {
      setEggs(event.target.checked);
    }

    console.log(eggs);
    console.log(onion);
    console.log(potatoes);
  }
  const handleClickAll =()=>{

    setNuts(true);
    setBeer(true);
    setEggs(true);
    setPotatoes(true);
    setOnion(true);
    setMacarrones(true);


  }
  const handleUnClickAll =()=>{
    setNuts(false);
setBeer(false);
setEggs(false);
setPotatoes(false);
setOnion(false);
setMacarrones(false);

  }

  const handleSubmit=(event)=>{
    event.preventDefault();}
  //function renderPhrase(event)  {

  return (
    <>
      <div>
        <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="checkbox"
            name="macarrones"
            id="macarrones"
            onChange={handleChange}
            checked={macarrones}
          />
          <label htmlFor="">Macarrones</label>

          <input
            type="checkbox"
            name="potatoes"
            id="potatoes"
            onChange={handleChange}
            checked={potatoes}
          />
          <label htmlFor="potatoes">Patatas</label>

          <input
            type="checkbox"
            name="nuts"
            id="nuts"
            onChange={handleChange}
            checked={nuts}
          />
          <label htmlFor="nuts">Nueces</label>

          <input
            type="checkbox"
            name="eggs"
            id="eggs"
            onChange={handleChange}
            checked={eggs}
          />
          <label htmlFor="eggs">Huevos</label>

          <input
            type="checkbox"
            name="onion"
            id="onion"
            onChange={handleChange}
            checked={onion}
          />
          <label htmlFor="onion">Cebolla</label>

          <input
            type="checkbox"
            name="beer"
            id="beer"
            onChange={handleChange}
            checked={beer}
          />
          <label htmlFor="beer">Cerveza</label>
          
        </form>
        <button onClick={handleClickAll}>Marcar Todos</button>
        <button onClick={handleUnClickAll}>Desactivar Todos</button>

        <p >
          {potatoes === true &&
          eggs === true &&
          onion === true &&
          beer===false &&
          nuts===false&&
          macarrones===false
    
            ? 'Eres un cebollista Olé!'
            : 'Eres para echar a comer a parte. Pero si elegiste cerveza.. todavía te la compro'}
        </p>
      </div>
    </>
  );
}

export default App;
