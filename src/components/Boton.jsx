// Se usa rafce para crear un componente funcional
import React from 'react'

const Boton = ({ texto, onclick }) => {
    return <button onClick={onclick}>{texto}</button>
};

export default Boton
