//imports depencencies,images,styles*//

import { useState } from 'react';
// import  from '../images/react.svg'
// import  from
import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);
  const [name, setName] = useState('');
  const total=(tasks.length)
  const complete=tasks.filter((task)=>task.completed).length 
  const pending= tasks.length-complete;

  //funcions,vars,handles
  const handleInputName = (event) => {
    setName(event.target.value);
  };
  const handleClickTask = (ev) => {
    const clickedTaskId = ev.currentTarget.id;
    const foundTask = tasks[clickedTaskId];
    foundTask.completed = !foundTask.completed;
    setTasks([...tasks]);
  };

const handleSubmit= (event)=>{
  event.preventDefault();
}

  const renderTask = () => {
    return (
      tasks

        // Filtramos por nombre
        .filter((task) => {
          return task.task.toLowerCase().includes(name.toLowerCase());
        })
       
       //mapeamos
        .map((task, index) => {
          return (
            <ol key={index}>
              <li
                id={index}
                className={task.completed === true ? 'cross' : ''}
                onClick={handleClickTask}
              >
                {task.task}
              </li>
            </ol>
          );
        })
    );
      }

  return (
    <>
      <div>
        <h1>
          Mi lista de tareas
          {renderTask()}
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="srcName">
            Buscar la tarea:
            <input
              type="text"
              name="srcName"
              id="srcName"
              onChange={handleInputName}
              value={name}
            />
          </label>
        </form>
        <p>Tareas totales:{total}</p>
        <p>Tareas completadas:{complete}</p>
        <p>Tareas pendientes:{pending}</p>
      </div>
    </>
  );
}

export default App;
