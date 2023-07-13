// rcc creación de componente
// rce creación con export separado
// rfc creación de una función

import React, { Component } from 'react'
import MiBoton from './MiBoton'

export default class MiComponente extends Component {
  render() {
    return (
      <div>
        <MiBotton />
        <MiBoton />
      </div>
    )
  }
}

// Esto se creó seleccionando el texto, oprimiendo la bombilla y BOOM, super refactorización.
function MiBotton() {
  return <button> Esto podría ser un componente </button>
}

