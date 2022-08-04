import { useState, useEffect } from 'react'
import './App.css'
import * as API from "./services/peticiones";
import Razas from './views/razas';
import Actions from './views/Actions';

export function App() {
  const [races, setRaces] = useState([]);

  const [isEmpty, setEmpty] = useState(false);
  useEffect(() => {
    try {
      API.getAllRaces().then(resultado => setRaces(resultado));
    } catch(error)
    {
      console.log(error);
    }
  }, [isEmpty]);
  return (
    <>
      <h2>Test Fantasticfy Junior Dev</h2>
      <Actions setRazas={setRaces} razas={races} setEmpty= {setEmpty} />
      {races&&races.length>0?races.map(data =>
        <>
        <Razas razas={data} />
        </>
        )
        : <>
        <h2>La raza que a buscado no existe</h2>        
      </>
      }
    </>
  )
  
}


