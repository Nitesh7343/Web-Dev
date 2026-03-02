import React, { useState } from 'react'

const App = () => {

  const [title,setTitle] = useState('')
  const [detail,setDetail] = useState('')
  const [task,setTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(title);
    console.log(detail);

    const arr = [...task];
    
    arr.push({title,detail});
    setTask(arr);

    setTitle('');
    setDetail('');
  }

  const deleteNote = (idx)=>{
    const arr = [...task];

    arr.splice(idx,1);
    setTask(arr);
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex lg:w-1/2 p-10 gap-5 items-start flex-col'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
          <input 
        type="text"
        placeholder='Heading'
        className='px-5 py-2 w-full border-2 rounded outline-none'
        value = {title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <textarea 
        type="text"
        placeholder='Enter Details....'
        className='px-5 h-32 w-full py-2 border-2 rounded outline-none'
        value = {detail}
        onChange={(e)=>{setDetail(e.target.value)}}
        />
        <button className='w-full active:scale-95 bg-white text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap justify-start items-start gap-5 mt-5 h-full overflow-auto'>
        {task.map(function(ele,idx) {
          return <div key = {idx} className='flex justify-between flex-col item-start relative h-52 w-40 text-black pt-9 pb-5 py-8 px-4 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
            <div>
              <h3 className='leading-tight text-xl font-bold'>{ele.title}</h3>
            <p className='mt-2 leading-tight font-medium text-gray-500'>{ele.detail}</p>
            </div>
            <button onClick={()=>{deleteNote(idx)}} className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
      </div>
      </div>
    </div>
  )
}

export default App
