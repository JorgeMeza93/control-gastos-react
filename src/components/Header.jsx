import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControladorPresupuesto from './ControladorPresupuesto'

const Header = ( { presupuesto, setPresupuesto, isValid, setIsValid }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValid ? (
            <ControladorPresupuesto
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