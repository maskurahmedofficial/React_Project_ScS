import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <>
    
    <div className='h-full flex flex-nowrap overflow-x-auto gap-10 w-2/3 rounded-2xl p-5'>
      {/* {props.users.map(()=> <RightCard /> )} */}
      <RightCard />
    </div>

    </>
  )
}

export default RightContent