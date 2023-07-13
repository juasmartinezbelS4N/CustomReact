import React from 'react'

export default function MiBoton() {
  const test = (e) =>{
    e.value.toLowerCase(); //Falla
    // Hay que hacer una sesión de depuración con Debugger
    // El problema es que e no es un string
  }
  return (
    <button onClick={test}>
      NO ME OPRIMAS, O MORIRÉ
    </button>
  )
}
