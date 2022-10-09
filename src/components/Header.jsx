import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControladorPresupuesto from './ControladorPresupuesto'

const Header = ( { presupuesto, setPresupuesto, isValid, setIsValid, gastos, setGastos }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValid ? (
            <ControladorPresupuesto
                gastos={gastos}
                presupuesto={presupuesto}
                setGastos={setGastos}
                setPresupuesto={setPresupuesto}
                setIsValid={setIsValid}
            />
        ):
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValid={setIsValid}
            />
        }
        
    </header>
  )
}

export default Header