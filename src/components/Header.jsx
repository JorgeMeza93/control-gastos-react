import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControladorPresupuesto from './ControladorPresupuesto'

const Header = ( { presupuesto, setPresupuesto, isValid, setIsValid, gastos }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValid ? (
            <ControladorPresupuesto
                gastos={gastos}
                presupuesto={presupuesto}
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