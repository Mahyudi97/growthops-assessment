import React from 'react'
import Preloader from '../Preloader/Preloader'
import MainPage from '../MainPage/MainPage'

function HomePage() {
  return (
    <div className='relative'>
        <Preloader />
        <div className='w-screen h-screen overflow-scroll'>
            <MainPage />
        </div>
    </div>
  )
}

export default HomePage