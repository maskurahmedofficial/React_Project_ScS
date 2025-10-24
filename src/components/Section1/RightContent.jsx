import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <>
    
    <div className='h-full flex flex-nowrap gap-10 w-2/3 rounded-2xl bg-green-200 p-5'>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
    </div>

    </>
  )
}

export default RightContent