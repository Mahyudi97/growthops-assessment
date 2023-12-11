import React, { useEffect, useState } from 'react'
import Preloader from '../Preloader/Preloader'
import './MainPage.css'
import {  ArrowUpRightFromSquareSolid, CloseIcon, FacebookIcon, FooterBackground, GoIcon, InstagramIcon, LinkedInIcon, MenuIcon, RimBackground, StockDevicePhoto, SuperBackground, UnforgettableBackground, YoutubeIcon } from '../../assets'
import ClientLogo1 from '../../assets/client-logo-1';
import ClientLogo2 from '../../assets/client-logo-2';
import ClientLogo3 from '../../assets/client-logo-3';
import { LinearGradient } from 'react-text-gradients'

function MainPage() {
    const [showSideMenu, setShowSideMenu] = useState(false)
    const openSideMenu = () => { setShowSideMenu(true) }
    const closeSideMenu = () => { setShowSideMenu(false) }

    useEffect(() => {
        //Scrolling Client Logo 1
        if(document.getElementById('ClientLogo1Container'))
        {
            const ClientLogo1Container = document.getElementById('ClientLogo1Container');
            const ClientLogo1ContainerWidth = ClientLogo1Container.scrollWidth;

            window.addEventListener('load', () => {
                window.self.setInterval(() => {
                    if (ClientLogo1Container.scrollLeft !== ClientLogo1ContainerWidth) {
                        ClientLogo1Container.scrollTo(ClientLogo1Container.scrollLeft + 1, 0);
                    }
                }, 15);
            });
        }
        //Scrolling Client Logo 2
        if(document.getElementById('ClientLogo2Container'))
        {
            const ClientLogo2Container = document.getElementById('ClientLogo2Container');
            const ClientLogo2ContainerWidth = ClientLogo2Container.scrollWidth;
            ClientLogo2Container.scrollTo(ClientLogo2ContainerWidth, 0);

            window.addEventListener('load', () => {
                window.self.setInterval(() => {
                    if (ClientLogo2Container.scrollLeft !== ClientLogo2ContainerWidth) {
                        ClientLogo2Container.scrollTo(ClientLogo2Container.scrollLeft - 0.5, 0);
                    }
                }, 15);
            });
        }
        //Scrolling Client Logo 3
        if(document.getElementById('ClientLogo3Container'))
        {
            const ClientLogo3Container = document.getElementById('ClientLogo3Container');
            const ClientLogo3ContainerWidth = ClientLogo3Container.scrollWidth;

            window.addEventListener('load', () => {
                window.self.setInterval(() => {
                    if (ClientLogo3Container.scrollLeft !== ClientLogo3ContainerWidth) {
                        ClientLogo3Container.scrollTo(ClientLogo3Container.scrollLeft + 1, 0);
                    }
                }, 15);
            });
        }
    }, [])

  return (
    <div className='relative bg-[#000000] mainPageAnimation'>
            {/* SideMenu */}
            { 
            showSideMenu && 
                <>
                    <div className='sideMenuModal'>
                        <div className='w-[1270px] sm:w-[375px] h-[69px] bg-[#000000] mt-[24px] mx-auto'>
                            <div className='sideMenuIcon'>
                                <img src={GoIcon} />
                            </div>
                            <div className='sideMenuClose'>
                                <a className='text-white cursor-pointer menuText' onClick={closeSideMenu} >CLOSE <img src={CloseIcon} style={{ display: 'inline-block', marginLeft: '8px' }}/></a>
                            </div>
                        </div>
                        <div className='sideMenuContent text-white uppercase'>
                            <div className='text-white font-black text-[64px] sm:text-[48px] leading-[78.02px] sm:leading-[58.51px]'><a className='text-white cursor-pointer'>Services</a></div> <br></br>
                            <div className='text-white font-black text-[64px] sm:text-[48px] leading-[78.02px] sm:leading-[58.51px]'><a className='text-white cursor-pointer'>Work</a></div>   <br></br>
                            <div className='text-white font-black text-[64px] sm:text-[48px] leading-[78.02px] sm:leading-[58.51px]'><a className='text-white cursor-pointer'>Insights</a></div>  <br></br>
                            <div className='text-white font-black text-[64px] sm:text-[48px] leading-[78.02px] sm:leading-[58.51px]'><a className='text-white cursor-pointer'>Careers</a></div>  <br></br>
                            <div className='text-white font-black text-[64px] sm:text-[48px] leading-[78.02px] sm:leading-[58.51px]'><a className='text-white cursor-pointer'>Contact</a></div>  <br></br>
                        </div>
                    </div>
                </>
            }
            <div className='sm:w-screen bg-cover bg-center bg-no-repeat'  style={{backgroundImage: `url(${RimBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div style={{ width: '100%', height:'115px', border: '2px solid transparent' }}>
                    <div className='w-[1270px] sm:w-[375px] h-[69px] border-2 border-[#F5F5F514] rounded-[64px] bg-[#000000] mt-[24px] mx-auto'>
                        <div className='searchBarIcon'>
                            <img src={GoIcon} />
                        </div>
                        <div className='menuBarIcon'>
                            <a className='text-white cursor-pointer menuText' onClick={openSideMenu} >MENU <img src={MenuIcon} style={{ display: 'inline-block', marginLeft: '8px' }}/></a>
                        </div>
                    </div>
                </div>            
                <div className='w-[1270px] sm:w-[327px] mt-[130px] sm:mt-[70px] mx-auto'>
                    <p className='text-8xl	sm:text-[53px] font-extrabold text-white text-left mt-[28px]'>YOUR NEW-BREED,</p>
                    <p className='text-8xl	sm:text-[53px] font-extrabold text-white text-right mt-[28px]'>END-TO-END</p>
                    <p className='text-8xl	sm:text-[53px] font-extrabold text-white text-left mt-[28px] ml-20 sm:ml-0'>DIGITAL ALLY</p>
                </div>

                {/* Fading effect */}
                <div className='w-full	h-[519px] mt-[143px]' style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, #010101 100%)'}}>

                </div>

            </div>
            <div className='w-569px sm:w-[327px] mx-auto text-center text-white font-medium text-[32px] sm:text-[20px] leading-[44px] sm:leading-[24.38px] pt-[62px]'>
                With a focus in fusing <span style={{ color: '#33F3FF'}}>strategy</span>, <br></br>
                <span style={{ position:'relative', zIndex: '0', width:'154px', display: 'inline', border: '1px solid #33FFF3', padding: '5px 15px 5px 15px', color: '#33F3FF'}}>
                    <div className="absolute h-2.5	w-2.5" style={{zIndex: '1', background: '#000000', border: '1px solid #33FFF3', left:'-5.5px', top:'-5.5px'}}></div>
                    <div className="absolute h-2.5 w-2.5" style={{zIndex: '1',background: '#000000',border: '1px solid #33FFF3', right:'-5.5px', top:'-5.5px'}}></div>
                    <div className="absolute h-2.5 w-2.5" style={{zIndex: '1',background: '#000000',border: '1px solid #33FFF3', left:'-5.5px', bottom:'-5.5px'}}></div>
                    <div className="absolute h-2.5 w-2.5" style={{zIndex: '1',background: '#000000',border: '1px solid #33FFF3', right:'-5.5px', bottom:'-5.5px'}}></div>
                    design
                </span> and <span style={{ color: '#33F3FF'}}>{'<technology/>'}</span> to <br></br>
                build and sustain market leaders <br></br><br></br><br></br>
            </div>
            <p className='text-center text-white font-medium text-[32px] sm:text-[20px] leading-[44px] sm:leading-[24.38px] mt-[82px] sm:mt-[65px]' >
                this is
            </p>
            <p className='text-center text-[#33F3FF] font-extrabold text-[96px] sm:text-[36px] leading-[117.02px] mt-[62px] sm:mt-[40px] p-auto h-[117px]'>
                GrowthOps Asia
            </p>

            {/* What We Do */}
            <p className='text-center text-white font-extrabold text-8xl sm:text-4xl mt-[244px] sm:mt-[79px] p-auto'>
                WHAT WE DO
            </p>
            {/* 01 */}
            <div class="w-[1206px] sm:w-[327px] mx-auto mt-20 sm:mt-10 rounded-xl flex	sm:block">
                <div className='w-[793px] sm:w-[327px] hidden sm:block sm:mb-[23px]'>
                    <img src={StockDevicePhoto} />
                </div>
                <div  className='w-[413px] sm:w-[327px]'  style={{ display: 'flex',  alignItems: 'center' }}>
                    <div className='w-[349px]'>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #F5F5F5', color:'#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            01
                        </div>
                        <p className='text-left text-white font-extrabold' style={{ fontSize: '40px', lineHeight: '48.76px', marginTop: '24px'}} >
                                Performance Marketing & Analytics
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC' , marginTop: '24px'}}>
                                Performance Media <br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                Search Engine Optimisation <br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                Web & App Analytics <br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                Conversion Rate Optimisation Through Personalisation <br></br>
                            </p>

                            <div className='font-extrabold	text-sm	' style={{ marginTop: '24px', width: '121px', height: '41px', borderRadius: '48px', border: '2px solid #F5F5F5', color:'#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                See More
                            </div>
                    </div>
                </div>
                <div className='w-[793px] sm:w-[327px] sm:hidden'>
                    <img src={StockDevicePhoto} />
                </div>
            </div>
            {/* 02 */}
            <div class="w-[1206px] sm:w-[327px] mx-auto mt-20 sm:mt-10 rounded-xl flex	sm:block">
                <div className='w-[793px] sm:w-[327px] sm:mb-[23px]'>
                    <img src={StockDevicePhoto} />
                </div>
                <div  className='w-[413px] sm:w-[327px]'  style={{ display: 'flex',  alignItems: 'center' }}>
                    <div className='w-[349px] ml-[64px] sm:ml-0'>
                        <div style={{width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #F5F5F5', color:'#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                02
                            </div>
                            <p className='text-left text-white font-extrabold' style={{ fontSize: '40px', lineHeight: '48.76px', marginTop: '24px'}} >
                                Digital-First Creative
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC' , marginTop: '24px'}}>
                                Brand & Marketing Strategy <br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                Content Hubs <br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                Creative Services <br></br>
                            </p>

                            <div className='font-extrabold	text-sm	' style={{ marginTop: '24px', width: '121px', height: '41px', borderRadius: '48px', border: '2px solid #F5F5F5', color:'#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                See More
                            </div>
                    </div>
                </div>
            </div>
            {/* 03 */}
            <div class="w-[1206px] sm:w-[327px] mx-auto mt-20 sm:mt-10 rounded-xl flex	sm:block">
                <div className='w-[793px] sm:w-[327px] hidden sm:block sm:mb-[23px]'>
                    <img src={StockDevicePhoto} />
                </div>
                <div  className='w-[413px] sm:w-[327px]'  style={{ display: 'flex',  alignItems: 'center' }}>
                    <div className='w-[349px]'>
                    <div style={{width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #F5F5F5', color:'#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                03
                            </div>
                            <p className='text-left text-white font-extrabold' style={{ fontSize: '40px', lineHeight: '48.76px', marginTop: '24px'}} >
                                Marketing Technology
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC' , marginTop: '24px'}}>
                                Technology Consulting<br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                MarTech Deployment & Partnerships<br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                Cloud Readiness & Migration<br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                Mobile Development<br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                Custom Web Development<br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                Solution Architecture <br></br>
                            </p>

                            <div className='font-extrabold	text-sm	' style={{ marginTop: '24px', width: '121px', height: '41px', borderRadius: '48px', border: '2px solid #F5F5F5', color:'#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                See More
                            </div>
                    </div>
                </div>
                <div className='w-[793px] sm:w-[327px] sm:hidden'>
                    <img src={StockDevicePhoto} />
                </div>
            </div>
            {/* 04 */}
            <div class="w-[1206px] sm:w-[327px] mx-auto mt-20 sm:mt-10 rounded-xl flex	sm:block">
                <div className='w-[793px] sm:w-[327px] sm:mb-[23px]'>
                    <img src={StockDevicePhoto} />
                </div>
                <div  className='w-[413px] sm:w-[327px]'  style={{ display: 'flex',  alignItems: 'center' }}>
                    <div className='w-[349px] ml-[64px] sm:ml-0'>
                        <div style={{width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #F5F5F5', color:'#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                04
                            </div>
                            <p className='text-left text-white font-extrabold' style={{ fontSize: '40px', lineHeight: '48.76px', marginTop: '24px'}} >
                                Experience Design & Strategy
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC' , marginTop: '24px'}}>
                                Digital Transformation & Change Management <br></br>
                            </p>
                            <p className="text-sm font-normal leading-6	" style={{ color: '#CCCCCC', marginTop: '16px'}}>
                                User Experience Strategy and Design<br></br>
                            </p>

                            <div className='font-extrabold	text-sm	' style={{ marginTop: '24px', width: '121px', height: '41px', borderRadius: '48px', border: '2px solid #F5F5F5', color:'#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                See More
                            </div>
                    </div>
                </div>
            </div>

            {/* Unforgettable Results */}
            <div className='text-center font-extrabold text-[88px] sm:text-[35px] mt-[280px] sm:mt-[192px] p-auto'>
                <div className='relative m-auto w-[941px] sm:w-[356px] h-[101px] sm:h-[51px] ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='absolute w-full h-full bg-contain bg-center bg-no-repeat' style={{ zIndex: '2', backgroundImage: `url(${UnforgettableBackground})` }}></div>
                    <span className='absolute text-white'>
                        <LinearGradient gradient={['to right', '#004CBA , #19B2A7, #FDD196']}>
                            UNFORGETTABLE
                        </LinearGradient>
                    </span>
                </div> 
                <span className='text-white'>RESULTS</span> 
            </div>

            <div className='mt-[98px] mx-auto w-[1000px] sm:w-[356px] h-[843px]' >
                <div className='float-left h-full'>
                    <p className='text-left font-bold text-[64px] leading-[78.02px] text-[#07DDDA]' >
                        400%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0 leading-[17.07px] text-[#07DDDA]'>increase in organic page views</p>
                    <p className='font-normal text-sm top-2	w-[356px] leading-[17.07px] text-[#B4B4B4]'>Using our SEO services, it also resulted in a <span className='font-semibold'>109% increase in page visibility</span></p>

                    <p className='mt-[159px] text-left font-bold text-[64px] leading-[78.02px] text-[#07DDDA]'>
                        96%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0 leading-[17.07px] text-[#07DDDA]'>faster page launches</p>
                    <p className='font-normal text-sm top-2	w-[356px] leading-[17.07px] text-[#B4B4B4]'>Using AEM, a leading Telco saw these results</p>
                    <div className='mt-[21px] mr-auto mb-12px ml-[0px] w-[277px] h-[40px] rounded-[4px] bg-[#024241]'>
                        <div className='left-0 w-[80px] h-full rounded=[4px] bg-[#07DDDA]'></div>
                    </div>
                    <p className='font-normal text-sm mt-[8px]	w-[356px] leading-[17.07px] text-[#B4B4B4]'>Campaign launches cut from 7 days to 2 days </p>
                    <div className='mt-[21px] mr-auto mb-12px ml-[0px] w-[277px] h-[40px] rounded-[4px] bg-[#024241]'>
                        <div className='left-0 w-[15px] h-full rounded=[4px] bg-[#07DDDA]'></div>
                    </div>
                    <p className='font-normal text-sm mt-[8px] w-[356px] leading-[17.07px] text-[#B4B4B4]'>Page launches cut from 2 days to 2 hours</p>

                    <p className='text-left font-bold mt-[115px] text-[64px] leading-[78.02px] text-[#07DDDA]' >
                        38%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0 leading-[17.07px] text-[#07DDDA]'>conversion rate improvement</p>
                    <p className='font-normal text-sm top-[8px] w-[356px] leading-[17.07px] text-[#B4B4B4]'>Using Adobe Target to A/B test landing pages’ forms, we saw an <span className='font-semibold'>increase in conversion rate </span></p>
                </div>
                <div className='float-right h-full'>
                    <p className='text-left font-bold  mt-[103px] text-[64px] leading-[78.02px] text-[#07DDDA]'>
                        4.5%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0 leading-[17.07px] text-[#07DDDA]'>increase in sales</p>
                    <p className='font-normal text-sm top-[16px] w-[356px] leading-[17.07px] text-[#B4B4B4]'>Through our creative services, a national automaker experienced a <span className='font-semibold'>4.5% increase in sales amidst a -4.6% market decline</span>. They also had a <span className='font-semibold'>2% increase in market share</span>, and a <span className='font-semibold'>5.6 point shift in brand perception</span></p>
                
                    <p className='text-left font-bold  mt-[158px] text-[64px] leading-[78.02px] text-[#07DDDA]'>
                        71%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0 leading-[17.07px] text-[#07DDDA]'>reduction in cpl</p>
                    <p className='font-normal text-sm top-[16px] w-[356px] leading-[17.07px] text-[#B4B4B4]'>After optimising the performance media funnel, a leading bank saw <span className='font-semibold'>savings over AUD$300 in the first year</span></p>
                </div>
            </div>


            <div style={{clear:'both'}}></div>

            {/* What Clients Say */}
            <p className='text-center text-white font-extrabold text-[88px] sm:text-[35px] leading-[84px] sm:leading-[40px] mt-[203px] sm:mt-[146px] p-auto '>
                WHAT CLIENTS SAY
            </p>
            <div className='mt-[88px] mx-auto w-[371px] h-[56px] rounded-[30px]'  style={{border: '1px solid #2B2B2B'}}>
                <div className="font-bold float-left text-[#010101] h-full w-[84px] bg-[#07DDDA] rounded-[30px]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  border: '2px solid black'}}>Telco</div>
                <div className='font-normal float-left text-[#FFFFFF] h-full w-[119px] ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Insurance</div>
                <div className='font-normal float-left text-[#FFFFFF] h-full w-[101px] ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Fintech</div>
                <div className='font-normal float-left text-[#FFFFFF] h-full w-[55px] ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>IT</div>
            </div>
            <div className='mt-[64px] mx-auto w-[1000px] sm:w-[371px] h-[306px] sm:h-[460px]' >
                <div className='float-left w-[105px] sm:w-[40px] h-full'>
                    <p className='top-0 left-0 font-bold text-[40px] text-[#07DDDA] leading-[48.76px]'>“</p> 
                </div>
                <div className='h-full'>
                    <p  className='font-[500px] text-[24px] sm:text-[20px] text-white leading-[36px] sm:leading-[32px]'>Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.</p>
                    <p className='font-bold	text-base mt-[64px] text-[#F5F5F5]'>Jasmine Lee</p>
                    <p className='font-normal text-base mt-[12px] text-[#CCCCCC]'>[Position], [Company Name]</p>
                </div>
            </div>

            {/* Super proud to work with */}
            <div className='mt-[328px] mx-auto w-[1000px] sm:w-[327px] text-center text-white font-[800] text-[88px] sm:text-[35px] leading-[84px] sm:leading-[40px]' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='relative w-[373px] sm:w-[148px] h-[110px] sm:h-[48px]' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='absolute w-full h-full bg-contain bg-center bg-no-repeat' style={{ zIndex: '2', backgroundImage: `url(${SuperBackground})` }}></div>
                        <span className='absolute text-white'>
                            <LinearGradient gradient={['to right', '#9747FF , #FFFFFF']}>SUPER</LinearGradient>
                        </span>
                    </div> 
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        &nbsp;PROUD
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        &nbsp;TO
                    </div>
            </div>
            <p className='text-center text-white font-[800] text-[88px] sm:text-[35px] leading-[84px] sm:leading-[40px]'  >
                WORK WITH
            </p>
            <div style={{clear:'both'}}></div>

            <div className='clientContainer'>
                <div id={'ClientLogo1Container'} className='clientLogoContainer no-scrollbar'>
                    <div  style={{ width: '2080px' }}>
                        {ClientLogo1.map((img) => (
                            <img key={img} src={img} alt={img} className='clientLogo'/>
                        ))}
                        {ClientLogo1.map((img) => (
                            <img key={img} src={img} alt={img} className='clientLogo' />
                        ))}
                    </div>
                </div>

                <div id={'ClientLogo2Container'} className='clientLogoContainer no-scrollbar' style={{ marginTop: '64px' }}>
                    <div  style={{ width: '2080px' }}>
                        {ClientLogo2.map((img) => (
                            <img key={img} src={img} alt={img} className='clientLogo' />
                        ))}
                        {ClientLogo2.map((img) => (
                            <img key={img} src={img} alt={img} className='clientLogo'/>
                        ))}
                    </div>
                </div>

                
                <div id={'ClientLogo3Container'} className='clientLogoContainer no-scrollbar' style={{ marginTop: '64px' }}>
                    <div  style={{ width: '2080px' }}>
                        {ClientLogo3.map((img) => (
                            <img key={img} src={img} alt={img} className='clientLogo'/>
                        ))}
                        {ClientLogo3.map((img) => (
                            <img key={img} src={img} alt={img} className='clientLogo'/>
                        ))}
                    </div>
                </div>

            </div>

            {/* Let's Chat */}
            <div className='letsChatContainer'>
                <button className='font-extrabold text-lg leading-5 text-white letsChatButton'>
                    Let's Chat
                </button>
            </div>

            {/* Footer */}
            <div className='mt-[240px] relative h-[553px] bg-cover bg-center bg-no-repeat text-center'  style={{backgroundImage: `url(${FooterBackground})`,  border: '1px solid transparent'}}>
                <div className='mt-[254px] mx-auto text-center w-[510px] sm:w-[328px] text-center'>
                        <div className=' w-[90px] h-[42px] text-center inline-block'>
                            <a className='text-white cursor-pointer	'>Services</a>
                        </div>
                        <div className='w-[90px] h-[42px] text-center inline-block'>
                            <a className='text-white cursor-pointer	'>Works</a>
                        </div>
                        <div className=' w-[90px] h-[42px] text-center inline-block'>
                            <a className='text-white cursor-pointer	'>Insights</a>
                        </div>
                        <div className=' w-[90px] h-[42px] text-center inline-block'>
                            <a className='text-white cursor-pointer	'>Careers</a>
                        </div>
                        <div className='w-[90px] h-[42px] text-center whitespace-nowrap	inline-block'>
                            <a className='text-white cursor-pointer	'>Contact Us</a>
                        </div>
                </div>
                <div className='mt-[56px]'>
                    <div className='m-auto w-[298px]'>
                        <div className='text-white mr-14' style={{ padding:'auto', width:'32px', height:'32px', float: 'left'}}>
                            <a className='text-white cursor-pointer	'><img src={LinkedInIcon}></img></a>
                        </div>
                        <div className='text-white mr-14' style={{ padding:'auto', width:'32px', height:'32px', float: 'left'}}>
                            <a className='text-white cursor-pointer	'><img src={FacebookIcon}></img></a>
                        </div>
                        <div className='text-white mr-14' style={{ padding:'auto', width:'32px', height:'32px', float: 'left'}}>
                            <a className='text-white cursor-pointer	'><img src={InstagramIcon}></img></a>
                        </div>
                        <div className='text-white' style={{ padding:'auto', width:'32px', height:'32px', float: 'left'}}>
                            <a className='text-white cursor-pointer	'><img src={YoutubeIcon}></img></a>
                        </div>
                    </div>
                </div>
                <div style={{ clear: 'both'}}></div>
                <div className='mt-[80px] mx-auto w-[1286px] sm:w-[328px] h-[50px] relative'>
                    <div className='float-left w-6/12 text-left sm:hidden '>
                        <p className='font-semibold text-xs leading-4 text-[#6F7176]'>© Copyright GrowthOps. All rights reserved.</p>
                    </div>
                    <div className='float-right relative sm:w-full text-right sm:text-center  text-white font-normal	text-xs	leading-4 flex	sm:block'>
                        <div className=''  style={{ border: '1px solid gree'}}>
                            <a className='text-white cursor-pointer'><img src={ArrowUpRightFromSquareSolid} className='mr-1 inline-block w-[11px] h-[11px]'/> Go to global GrowthOps website</a>
                        </div>
                        <div className='sm:pt-[24px]' >
                            <a className='text-white cursor-pointer	ml-12 sm:ml-0'>Privacy policy</a>
                        </div>
                    </div>
                </div>
                <div style={{ clear: 'both'}}></div>
            </div>
            <div style={{ clear: 'both'}}></div>
    </div>
  )
}

export default MainPage