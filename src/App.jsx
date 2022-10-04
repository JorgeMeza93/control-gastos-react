import { useState } from 'react'
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
  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout( () => {
      setAnimarModal(true)
    }, 1000);
  }
  const guardarGasto = gasto => {
    gasto.id = generarID();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);

  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid ? (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
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
        />
      
      }  
    </div>
  )
}

export default App
