import React from 'react'
import Preloader from '../Preloader/Preloader'
import './MainPage.css'
import { GoIcon, MenuIcon } from '../../assets'

function MainPage() {
  return (
    <div>
        <Preloader />
        <div className='main'>
            <div style={{ width: '100%', height:'115px' }}>
                <div className='searchBar'>
                    <img src={GoIcon} className='searchBarIcon'/>

                    <button style={{float: 'right'}}>
                        <p className='menuText'>Menu</p>
                        <img src={MenuIcon} className='menuBarIcon'/>
                    </button>
                </div>
            </div>            
            {/* <div style={{ width: '100%', margin: '130px auto auto auto' }}>
                <h1 className='text-8xl	text-white	'>YOUR NEW-BREED,</h1>
                <h1 className='text-8xl	text-white	'>END-TO-END</h1>
                <h1 className='text-8xl	text-white	'>DIGITAL ALLY</h1>
            </div> */}
        </div>
    </div>
  )
}

export default MainPage