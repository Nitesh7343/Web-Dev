import React, { useState } from 'react'

const App = () => {

  const [i,setI] = useState(0);

  const Increment = () =>{
    setI(i+1);
  }
  const Decrement = () =>{
    setI(i-1);
  }

  return (
    <div className = "outer">
      <h1>{i}</h1>
      <div>
        <button onClick={Increment}> <span class="button_top"> Increase </span> </button>
        <button onClick={Decrement}> <span class="button_top"> Decrease </span> </button>
      </div>
    </div>
  )
}

export default App
