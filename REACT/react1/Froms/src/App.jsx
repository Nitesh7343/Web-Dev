import React from 'react'

const App = () => {

  const formSubmit = (e)=>{
    console.log(e);
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <div>
      <form onSubmit={(e) =>{
        formSubmit(e);
      }}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
