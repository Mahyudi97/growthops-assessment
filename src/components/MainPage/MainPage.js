import React from 'react'
import Preloader from '../Preloader/Preloader'
import './MainPage.css'
import { GoIcon, MenuIcon, RimBackground } from '../../assets'

function MainPage() {
  return (
    <div>
        <Preloader />
        <div className='main' style={{backgroundImage: `url(${RimBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div style={{ width: '100%', height:'115px', border: '2px solid transparent' }}>
                <div className='searchBar'>
                    <img src={GoIcon} className='searchBarIcon'/>

                    <button style={{float: 'right'}}>
                        <p className='menuText'>Menu</p>
                        <img src={MenuIcon} className='menuBarIcon'/>
                    </button>
                </div>
            </div>            
            <div style={{ width: '1203px', margin: '130px auto auto auto' }}>
                <h1 className='text-8xl	font-extrabold text-white text-left'>YOUR NEW-BREED,</h1>
                <h1 className='text-8xl	font-extrabold text-white text-right'>END-TO-END</h1>
                <h1 className='text-8xl	font-extrabold text-white text-left ml-20'>DIGITAL ALLY</h1>
            </div>

            {/* Fading effect */}
            <div style={{ width: '100%', height: '519px', background: 'linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, #010101 100%)', marginTop: '143px' }}>

            </div>

        </div>
        <div style={{  background: '#000000', paddingTop: '62px'}}>
                <p className='text-center text-white font-medium text-3xl leading-10'>
                    With a focus in fusing <span style={{ color: '#33F3FF'}}>strategy</span>, <br></br>
                    <span style={{ color: '#33F3FF'}}>design</span> and <span style={{ color: '#33F3FF'}}>{'<technology/>'}</span> to <br></br>
                    build and sustain market leaders <br></br><br></br><br></br>
                </p>
                <p className='text-center text-white font-medium text-3xl leading-10' style={{ marginTop: '82px'}}>
                    this is
                </p>
                <p className='text-center text-white font-extrabold	text-8xl leading-10' style={{ marginTop: '62px',  color: '#33F3FF'}}>
                    GrowthOps Asia
                </p>
        </div>
    </div>
  )
}

export default MainPage