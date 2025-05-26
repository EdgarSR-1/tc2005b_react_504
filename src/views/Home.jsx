import React from 'react'
import { useState } from 'react'
import Boton from '../components/Boton'

const Home = () => {
        const [count, setCount] = useState(0)
        const suma = () => {
        setCount(count + 1);
        };
    const resta = () => {
    setCount(count - 1);
    };
  return (
    <div>
      <h1>Mi app en React</h1>
      <h2>{count}</h2>
      <Boton onclick={suma} texto = "suma"/>
      <Boton onclick={resta} texto = "resta"/>
      <Boton texto = "mensaje"/>
      <Boton texto = "guardar"/>
    </div>
    );
}

export default Home
