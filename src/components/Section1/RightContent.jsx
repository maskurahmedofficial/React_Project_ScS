import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <>
    
    <div className='h-full flex flex-nowrap overflow-x-auto w-2/3 rounded-2xl p-5'>
      {props.users.map((elem,idx)=> <RightCard key={idx} id={idx}  tag={elem.tag}  img={elem.image}
      
      /> )}
      
    </div>

    </>
  )
}

export default RightContent