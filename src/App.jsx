import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from "./img/nuevo-gasto.svg"
import Modal from './components/Modal';
import { generarID } from "./helpers/Helpers.js"

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
    setGastos([...gastos, gasto]);

  }

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid ? (
        <>
          <main>
            
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
    </>
  )
}

export default App
