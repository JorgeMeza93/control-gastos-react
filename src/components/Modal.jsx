import React from 'react';
import { useState, useEffect } from 'react'
import cerrarBoton from "../img/cerrar.svg";
import Mensaje from './Mensaje';

const Modal = ( {setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar} ) => {

  const [nombre, setNombre] = useState("");   
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState(""); 
  const [mensaje, setMensaje]  = useState("");

    useEffect( () => {
        if( Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
        }
    }, [])

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout( () => {
        setModal(false);
    }, 1000)
  }
  const handleSubmit = e => {
    e.preventDefault();
    if([nombre, cantidad, categoria].includes("")){
        setMensaje("Todos los campos son obligatorios");
        setTimeout( () =>{
            setMensaje("");
        }, 3000);
        return;
    }
    guardarGasto({nombre, cantidad, categoria})
  }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img
                src={cerrarBoton}
                alt="cerrar modal"
                onClick={ocultarModal}
            />
        </div>
        <form 
            className={`formulario ${animarModal ? "animar" : "cerrar" }`}
            onSubmit={handleSubmit}
            >
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor='nombre'>Nombre del gasto</label>
                <input
                    id='nombre'
                    type="text"
                    placeholder='Añade el nombre del gasto'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input
                    id='cantidad'
                    type="number"
                    placeholder='Añade la cantidad del gasto'
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className='campo'>
                <label htmlFor='categoria'>Categoría</label>
                <select 
                    id='categoria'
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="suscripciones">Entretenimiento</option>
                    <option value="salud">Salud</option>
                    <option value="gastos">Varios</option>
                </select>
            </div>
            <input
                type="submit"
                value="Añadir Gasto"
            />
        </form>
    </div>
  )
}

export default Modal