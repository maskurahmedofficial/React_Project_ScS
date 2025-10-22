import React from 'react'
import LeftContant from './LeftContant'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <>
    <div className='h-[90vh] bg-gray-600 p-5 gap-10 py-10 flex justify-between items-center'>

    <LeftContant/>
    <RightContent/>
    
    </div>
    </>
  )
}

export default Page1Content