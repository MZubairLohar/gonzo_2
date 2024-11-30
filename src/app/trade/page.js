import React from 'react'
import Navbar from '../componants/navbar'

export default function Trade () {
  return (
      <div className='bg-[#6c83d6] '>
            <Navbar/>
        <div className="w-full mt-32 place-self-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
            <form className="space-y-6" action="#">
                <h5 className="text-xl -mb-6 font-black text-gray-900 text-wider text-center">Purcahse</h5>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Ether</label>
                    <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white text-center" placeholder="ETHER" required />
                </div>
                
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-wider">BUY</button>
                
            </form>
        </div>

    </div>
  )
}
