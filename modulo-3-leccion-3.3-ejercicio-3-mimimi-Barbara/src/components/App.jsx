//imports depencencies,images,styles*//

import { useState } from 'react'
// import  from '../images/react.svg'
// import  from 
import '../styles/App.scss'

function App() {

  //funcions,vars,handles
  const [inputText, setInputText]= useState('');
  const[traductorText, setTraductor]=useState('');

  const translate =(pepino) => {
    return pepino.replace(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g, 'i')}

    const handleInput=(event) => {
const newText=event.target.value;
setInputText(newText);
const textTranslate=translate(newText);
setTraductor(textTranslate)

    }


  return (
  
  <>
 <div className="container">
      <h1>Traductor MIMIMI</h1>
      <textarea
        placeholder="Escribe algo..."
        value={inputText}
        onChange={handleInput}
      />
      <p>{traductorText}</p>
    </div>

   </>
  )
}

export default App
