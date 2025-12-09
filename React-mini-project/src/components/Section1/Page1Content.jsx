import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 gap-10 px-21 flex justify-between h-[90vh] bg-blue-200'>
        <LeftContent />
        <RightContent />
        
    </div>
  )
}

export default Page1Content