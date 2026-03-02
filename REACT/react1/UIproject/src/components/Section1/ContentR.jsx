import React from 'react'
import RightCard from './RightCard'

const ContentR = (props) => {
  return (
    <div className='h-full overflow-x-auto flex gap-10 p-4 w-2/3'>
      {
        props.user.map(function(ele,idx) {
          return <RightCard id = {idx} img = {ele.img} intro = {ele.intro} tag = {ele.tag}/>
        })
      }
    </div>
  )
}

export default ContentR
