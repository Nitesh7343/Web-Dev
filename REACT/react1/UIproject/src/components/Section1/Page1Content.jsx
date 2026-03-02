import React from 'react'
import ContentL from './ContentL'
import ContentR from './ContentR'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 px-18 flex gap-10 items-center h-[90vh]'>
      <ContentL/>
      <ContentR user = {props.user}/>
    </div>
  )
}

export default Page1Content
