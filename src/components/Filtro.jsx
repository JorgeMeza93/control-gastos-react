import React from 'react'
import { useState, useEffect } from 'react'

const Filtro = ( {filtro, setFiltro}) => {
  return (
    <div className='filtros contenedor sombra'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select
                    value={filtro}
                    onChange={ e => setFiltro( e.target.value)}
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
        </form>
    </div>
  )
}

export default Filtro