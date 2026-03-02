import React from 'react'
import { useState } from 'react';

const App = () => {

  const formSubmit = (e)=>{
    console.log(e);
    e.preventDefault();
    console.log("Submitted by",title);

    setTitle('');
  }

  const [title,setTitle] = useState(''); 

  return (
    <div>
      <form onSubmit={(e) =>{
        formSubmit(e);
      }}>
        <input type="text" placeholder = "Type here" value = {title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App










// import React from 'react'

// const App = () => {

//   const formSubmit = (e)=>{
//     console.log(e);
//     e.preventDefault();
//     console.log("Submitted");
//   }

//   return (
//     <div>
//       <form onSubmit={(e) =>{
//         formSubmit(e);
//       }}>
//         <input type="text" />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
