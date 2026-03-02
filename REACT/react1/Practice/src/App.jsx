import React from 'react'

const App = () => {
  
  const btnClick = () =>{
    console.log("CLicked");
  }

  return (
    <div className = "div">
      <h1>Hello, I'm Nitesh</h1>
      <button onClick={btnClick}>Click me</button>
    </div>
  )
}

export default App
