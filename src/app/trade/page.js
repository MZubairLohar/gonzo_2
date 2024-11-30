import React from 'react'
import Navbar from '../componants/navbar'

export default function Trade () {
  return (
    <div className=' '>
       {/* rounded-tl-lg */}
       <Navbar/>
        <div className=' absolute bottom-0 right-0 h-[100%] w-[100%] rounded-tl-lg overflow-hidden mt-64 bg-white' >
            <div className='left-0'>
                <button className='bg-[#6c83d6]'>Submit</button>
            </div>
            <div className=' absolute bottom-0 right-0 h-[80%] w-[80%] rounded-tl-lg overflow-hidden mt-64 bg-[#6c83d6]'>

            </div>
            
        </div>

    </div>
  )
}
