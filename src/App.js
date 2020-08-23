import React, { useState } from 'react';
import './App.css';


function App() {
  const [state, setState] = useState([])
  // [] guardo los valores ingresados a mi lista que empieza sin nada.
  const valor = (capturaevento) => {
    if (capturaevento.keyCode === 13) {
      //key13 es para que se mande toda la palabra con el enter 
      // para evitar que se mande el formulario preventDefault
      capturaevento.preventDefault();
      // archivando mis valores en el state ... sprit operator
      setState([...state, capturaevento.target.value])

      // para borrar el input, comillas en blannnco
      capturaevento.target.value = "";
    }

    //toma todo los cambios ingresados en mi cuadrito input
  }
  //console.log(state);
  
  const borra=(i)=>{
    //haciendo borrar, colocar [] porque usa es arreglo
    state.splice(i,1);
    setState([...state]);
    //console.log(state, i);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>LISTA DE TAREAS</p>
        <input className="form-control form-control-lg" type="text" placeholder="Lista de tarea"
          onKeyDown={(capturaevento) => valor(capturaevento)} />
        {/* mezcla de html con js llaves */}
        {/* html ... para escribir dentro de html en el js uso llaves */}
        <ul>
          {
            //lista de mis actividades
            state.map((l, i) => {
              return (
                <li key={i} >{l} <img onClick={()=>borra(i)} src="https://laletra.org/wp-content/uploads/2019/10/letters-2077251_960_720.png" width="30" alt=""/> </li>
              )
            })

          }
        </ul>
      </header>
    </div>
  );
}

export default App;
