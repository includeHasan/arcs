"use client"
import React from 'react'
import StudentNav from '@/components/own/studentUi'
const page = () => {
  return (
    <>
    <div>
     <StudentNav/>
    </div>
    <div>
        <div className='bg-white '>
        <div>
          <h1 className='text-center font-semibold bg-white'>
            History
          </h1>
        </div>
        </div>
    </div>
    </>
  )
}

export default page