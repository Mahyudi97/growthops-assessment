import React from 'react'
import './Preloader.css'

function Preloader() {
  return (
    <div className='Preloader h-screen flex'>
        <div className='mt-[337px] sm:mt-[444px]  mb-auto mx-auto w-[1206px] sm:w-[327px] mx-auto flex sm:block'>
            <div className='w-[860px] sm:w-[327px] text-[128px] sm:text-[53px] font-extrabold	text-white leading-none	'>
                We’re
                GrowthOps
            </div>
            <div className='bg-white mt-auto w-[346px] sm:w-[171px] h-[156px] sm:h-[89px] ml-[50px] sm:ml-0 sm:mt-[6px]  rounded-[80px] -rotate-[9.47deg] flex'>
                <div className='text-[96px] sm:text-[40px] font-extrabold text-[#33FFF3] m-auto'>Asia</div>
            </div>
        </div>
    </div>
  )
}

export default Preloader