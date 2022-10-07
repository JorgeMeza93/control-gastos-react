import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from "./img/nuevo-gasto.svg"
import Modal from './components/Modal';
import { generarID } from "./helpers/Helpers.js"
import ListadoGastos from './components/ListadoGastos';
import Filtro from './components/Filtro';

function App() {
  
  const [presupuesto, setPresupuesto] = useState(localStorage.getItem("presupuesto") ?? 0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")):[] );
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect( () => {
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout( () => {
      setAnimarModal(true)
    }, 1000);
    }
  }, [gastoEditar]);

  useEffect( () => {
    Number(localStorage.setItem("presupuesto", presupuesto ?? 0));
  }, [presupuesto])
  
  useEffect( () => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
    if(presupuestoLS > 0){
      setIsValid(true);
    }
  }, [])

  useEffect( () => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos])

  useEffect( () => {
    if(filtro){
      const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro);
      console.log(gastosFiltrados);
      setGastosFiltrados(gastosFiltrados);
    }

  }, [filtro]);
  
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
      setGastoEditar({})
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
            <Filtro
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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
          setGastoEditar={setGastoEditar}
        />
      
      }  
    </div>
  )
}

export default App
