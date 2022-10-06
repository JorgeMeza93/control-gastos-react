import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from "./img/nuevo-gasto.svg"
import Modal from './components/Modal';
import { generarID } from "./helpers/Helpers.js"
import ListadoGastos from './components/ListadoGastos';

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect( () => {
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout( () => {
      setAnimarModal(true)
    }, 1000);
    }
  }, [gastoEditar]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({})
    setTimeout( () => {
      setAnimarModal(true)
    }, 1000);
  }
  const guardarGasto = gasto => {
    if(gasto.id){
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
    }
    else{
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false);
    setTimeout( () => {
      setModal(false)
    }, 1000);
  }
const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id);
    console.log(gastosActualizados);
    setGastos(gastosActualizados);
}
  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
        gastos={gastos}
      />
      {isValid ? (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className='nuevo-gasto'>
          <img 
            src={IconoNuevoGasto}
            alt="ìcono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      </>
      ): null}
      { modal && 
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        />
      
      }  
    </div>
  )
}

export default App
