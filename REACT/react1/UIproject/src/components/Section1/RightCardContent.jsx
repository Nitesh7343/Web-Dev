import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='bg-white h-8 w-8 flex justify-center items-center rounded-full text-2xl font-semibold'>{props.id +1}</h2>
        <div>
          <p className='text-xs leading-relaxed text-white mb-10'>{props.intro}</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full'><i className="ri-arrow-right-long-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
