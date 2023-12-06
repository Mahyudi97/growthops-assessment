import React, { useEffect, useState, useRef } from 'react'
import Preloader from '../Preloader/Preloader'
import './MainPage.css'
import {  ArrowUpRightFromSquareSolid, CloseIcon, FacebookIcon, GoIcon, InstagramIcon, LinkedInIcon, MenuIcon, RimBackground, StockDevicePhoto, SuperBackground, UnforgettableBackground, YoutubeIcon } from '../../assets'
import ClientLogo1 from '../../assets/client-logo-1';
import ClientLogo2 from '../../assets/client-logo-2';
import ClientLogo3 from '../../assets/client-logo-3';
import { LinearGradient } from 'react-text-gradients'
import SideMenu from '../SideMenu/SideMenu';

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
    <div>
        <Preloader />
        <div className='main'>
            {/* SideMenu */}
            { 
            showSideMenu && 
                <>
                    <div className='sideMenuModal'>
                        <div className='sideMenuHeader'>
                            <div className='sideMenuIcon'>
                                <img src={GoIcon} />
                            </div>
                            <div className='sideMenuClose'>
                                <a className='text-white cursor-pointer menuText' onClick={closeSideMenu} >CLOSE <img src={CloseIcon} style={{ display: 'inline-block', marginLeft: '8px' }}/></a>
                            </div>
                        </div>
                        <div className='sideMenuContent text-white uppercase'>
                            <div className='sideMenuList'><a className='text-white cursor-pointer'>Services</a></div> <br></br>
                            <div className='sideMenuList'><a className='text-white cursor-pointer'>Work</a></div>   <br></br>
                            <div className='sideMenuList'><a className='text-white cursor-pointer'>Insights</a></div>  <br></br>
                            <div className='sideMenuList'><a className='text-white cursor-pointer'>Careers</a></div>  <br></br>
                            <div className='sideMenuList'><a className='text-white cursor-pointer'>Contact</a></div>  <br></br>
                        </div>
                    </div>
                </>
            }
            <div  style={{backgroundImage: `url(${RimBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div style={{ width: '100%', height:'115px', border: '2px solid transparent' }}>
                    <div className='searchBar'>
                        <div className='searchBarIcon'>
                            <img src={GoIcon} />
                        </div>
                        <div className='menuBarIcon'>
                            <a className='text-white cursor-pointer menuText' onClick={openSideMenu} >Menu <img src={MenuIcon} style={{ display: 'inline-block', marginLeft: '8px' }}/></a>
                        </div>
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
            <p className='text-center text-white font-medium text-3xl leading-10' style={{ paddingTop: '62px'}}>
                With a focus in fusing <span style={{ color: '#33F3FF'}}>strategy</span>, <br></br>
                <span style={{ position:'relative', zIndex: '0', width:'154px', display: 'inline', border: '1px solid #33FFF3', padding: '5px 15px 5px 15px', color: '#33F3FF'}}>
                    <div className="absolute h-2.5	w-2.5" style={{zIndex: '1', background: '#000000', border: '1px solid #33FFF3', left:'-5.5px', top:'-5.5px'}}></div>
                    <div className="absolute h-2.5 w-2.5" style={{zIndex: '1',background: '#000000',border: '1px solid #33FFF3', right:'-5.5px', top:'-5.5px'}}></div>
                    <div className="absolute h-2.5 w-2.5" style={{zIndex: '1',background: '#000000',border: '1px solid #33FFF3', left:'-5.5px', bottom:'-5.5px'}}></div>
                    <div className="absolute h-2.5 w-2.5" style={{zIndex: '1',background: '#000000',border: '1px solid #33FFF3', right:'-5.5px', bottom:'-5.5px'}}></div>
                    design
                </span> and <span style={{ color: '#33F3FF'}}>{'<technology/>'}</span> to <br></br>
                build and sustain market leaders <br></br><br></br><br></br>
            </p>
            <p className='text-center text-white font-medium text-3xl leading-10' style={{ marginTop: '82px'}}>
                this is
            </p>
            <p className='text-center text-white font-extrabold text-8xl' style={{ marginTop: '62px', padding: 'auto', height: '117px', color: '#33F3FF', lineHeight:'117.02px' }}>
                GrowthOps Asia
            </p>

            {/* What We Do */}
            <p className='text-center text-white font-extrabold text-8xl' style={{ marginTop: '244px', padding: 'auto', height: '117px'}}>
                WHAT WE DO
            </p>
            <div style={{ margin: '88px 80px auto 80px', height: '588px'}}>
                <div style={{ float: 'left', height:'100%', display:'flex', alignItems:'center'}}>
                    <div style={{ width: '349px', height: '476px' }}>
                        <div style={{width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #F5F5F5', color:'#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                <div style={{ float: 'right', width: '793px', height:'100%'}}>
                    <img src={StockDevicePhoto} />
                </div>
            </div>
            <div style={{ margin: '64px 80px auto 80px', height: '588px'}}>
                <div style={{ float: 'left', width: '793px', height:'100%'}}>
                    <img src={StockDevicePhoto} />
                </div>
                <div style={{ float: 'right', height:'100%', display:'flex', alignItems:'center'}}>
                    <div style={{ width: '349px', height: '476px' }}>
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
            <div style={{ margin: '88px 80px auto 80px', height: '588px'}}>
                <div style={{ float: 'left', height:'100%', display:'flex', alignItems:'center'}}>
                    <div style={{ width: '349px', height: '476px' }}>
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
                <div style={{ float: 'right', width: '793px', height:'100%'}}>
                    <img src={StockDevicePhoto} />
                </div>
            </div>
            <div style={{ margin: '64px 80px auto 80px', height: '588px'}}>
                <div style={{ float: 'left', width: '793px', height:'100%'}}>
                    <img src={StockDevicePhoto} />
                </div>
                <div style={{ float: 'right', height:'100%', display:'flex', alignItems:'center'}}>
                    <div style={{ width: '349px', height: '476px' }}>
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
            <p className='text-center font-extrabold text-8xl' style={{ marginTop: '280px', padding: 'auto'}}>
                <div style={{ position: 'relative', margin: 'auto', width:'941px', height: '101px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', zIndex: '2', width: '100%', height: '100%', backgroundImage: `url(${UnforgettableBackground})` }}></div>
                    <span style={{ position: 'absolute' }} className='text-white'>
                        <LinearGradient gradient={['to right', '#004CBA , #19B2A7, #FDD196']}>
                            UNFORGETTABLE
                        </LinearGradient>
                    </span>
                </div> 
                <span className='text-white'>RESULTS</span> 
            </p>

            <div style={{ margin: '98px auto auto auto', width: '975px', height: '843px'}}>
                <div style={{ float: 'left',  height:'100%'}}>
                    <p className='text-left font-bold' style={{ fontSize: '64px', lineHeight: '78.02px', color: '#07DDDA'}} >
                        400%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0' style={{ lineHeight: '17.07px', color: '#07DDDA'}} >increase in organic page views</p>
                    <p className='font-normal text-sm top-2	' style={{ width:'356px', lineHeight: '17.07px', color: '#B4B4B4'}}>Using our SEO services, it also resulted in a <span className='font-semibold'>109% increase in page visibility</span></p>

                    <p className='text-left font-bold' style={{ marginTop: '159px', fontSize: '64px', lineHeight: '78.02px', color: '#07DDDA'}} >
                        96%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0' style={{ lineHeight: '17.07px', color: '#07DDDA'}} >faster page launches</p>
                    <p className='font-normal text-sm top-2	' style={{ width:'356px', lineHeight: '17.07px', color: '#B4B4B4'}}>Using AEM, a leading Telco saw these results</p>
                    <div style={{ margin: '21px auto 12px 0px', width: '277px', height: '40px', borderRadius: '4px', background: '#024241'}}>
                        <div style={{ left: '0', width: '80px', height: '100%' , borderRadius: '4px', background: '#07DDDA'}}></div>
                    </div>
                    <p className='font-normal text-sm top-2	' style={{ width:'356px', lineHeight: '17.07px', color: '#B4B4B4'}}>Campaign launches cut from 7 days to 2 days </p>
                    <div style={{ margin: '21px auto 12px 0px', width: '277px', height: '40px', borderRadius: '4px', background: '#024241'}}>
                        <div style={{ left: '0', width: '15px', height: '100%' , borderRadius: '4px', background: '#07DDDA'}}></div>
                    </div>
                    <p className='font-normal text-sm' style={{ marginTop: '8px', width:'356px', lineHeight: '17.07px', color: '#B4B4B4'}}>Page launches cut from 2 days to 2 hours</p>

                    <p className='text-left font-bold' style={{ marginTop: '115px', fontSize: '64px', lineHeight: '78.02px', color: '#07DDDA'}} >
                        38%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0' style={{ lineHeight: '17.07px', color: '#07DDDA'}} >conversion rate improvement</p>
                    <p className='font-normal text-sm ' style={{ marginTop: '8px',width:'356px', lineHeight: '17.07px', color: '#B4B4B4'}}>Using Adobe Target to A/B test landing pages’ forms, we saw an <span className='font-semibold'>increase in conversion rate </span></p>
                </div>
                <div style={{ float: 'right', height:'100%'}}>
                    <p className='text-left font-bold' style={{ marginTop: '103px', fontSize: '64px', lineHeight: '78.02px', color: '#07DDDA'}} >
                        4.5%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0' style={{ lineHeight: '17.07px', color: '#07DDDA'}} >increase in sales</p>
                    <p className='font-normal text-sm' style={{ marginTop: '16px', width:'356px', lineHeight: '17.07px', color: '#B4B4B4'}}>Through our creative services, a national automaker experienced a <span className='font-semibold'>4.5% increase in sales amidst a -4.6% market decline</span>. They also had a <span className='font-semibold'>2% increase in market share</span>, and a <span className='font-semibold'>5.6 point shift in brand perception</span></p>
                
                    <p className='text-left font-bold' style={{ marginTop: '158px', fontSize: '64px', lineHeight: '78.02px', color: '#07DDDA'}} >
                        71%
                    </p>
                    <p className='text-left font-semibold text-sm uppercase top-0' style={{ lineHeight: '17.07px', color: '#07DDDA'}} >reduction in cpl</p>
                    <p className='font-normal text-sm' style={{ marginTop: '16px', width:'356px', lineHeight: '17.07px', color: '#B4B4B4'}}>After optimising the performance media funnel, a leading bank saw <span className='font-semibold'>savings over AUD$300 in the first year</span></p>
                </div>
            </div>

            {/* What Clients Say */}
            <p className='text-center text-white font-extrabold text-8xl' style={{ marginTop: '203px', padding: 'auto', height: '117px'}}>
                WHAT CLIENTS SAY
            </p>
            <div style={{ margin: '88px auto auto auto', width: '371px', height: '56px', borderRadius: '30px', border: '1px solid #2B2B2B'}}>
                <div className="font-bold" style={{ float: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#010101', height: '100%', width: '84px', background: '#07DDDA', borderRadius: '30px'}}>Telco</div>
                <div className='font-normal' style={{ float: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFFFFF', height: '100%', width: '119px'}}>Insurance</div>
                <div className='font-normal' style={{ float: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFFFFF', height: '100%', width: '101px'}}>Fintech</div>
                <div className='font-normal' style={{ float: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFFFFF', height: '100%', width: '55px'}}>IT</div>
            </div>
            <div style={{ margin: '64px auto auto auto', width: '1000px', height:' 306px'}}>
                <div style={{ float: 'left', width: '105px', height: '100%'}}>
                    <p className='top-0 left-0 font-bold' style={{ fontSize: '40px', lineHeight:'48.76px', color:'#07DDDA'}}>“</p> 
                </div>
                <div style={{ height: '100%'}} >
                    <p  className='font-medium text-2xl text-white leading-9'>Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.</p>
                    <p className='font-bold	text-base' style={{ marginTop:'64px', color: '#F5F5F5'}}>Jasmine Lee</p>
                    <p className='font-normal text-base' style={{ marginTop:'12px', color: '#CCCCCC'}}>[Position], [Company Name]</p>
                </div>
            </div>

            {/* Super proud to work with */}
            <div className='text-center text-white font-extrabold text-8xl' style={{ marginTop: '328px', padding: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ position: 'relative',  width:'373px', height: '110px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ position: 'absolute', zIndex: '2', width: '100%', height: '100%', backgroundImage: `url(${SuperBackground})` }}></div>
                        <span style={{ position: 'absolute' }} className='text-white'>
                            <LinearGradient gradient={['to right', '#9747FF , #FFFFFF']}>SUPER</LinearGradient>
                        </span>
                    </div> 
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        PROUD TO
                    </div>
            </div>
            <p className='text-center text-white font-extrabold text-8xl'  >
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
            <div className='footerContainer'>
                <div className='footerSubContainer'>
                    <div className='footerMenuContainer'>
                        <a className='text-white mr-10	cursor-pointer	'>Services</a>
                        <a className='text-white mr-10	cursor-pointer	'>Works</a>
                        <a className='text-white mr-10	cursor-pointer	'>Insights</a>
                        <a className='text-white mr-10	cursor-pointer	'>Careers</a>
                        <a className='text-white cursor-pointer	'>Contact Us</a>
                    </div> 
                    <div className='footerSocialMediaContainer'>
                        <div className='footerSocialMedia'>
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
                    <div className='footerLinkContainer'>
                        <div className='font-semibold text-xs	leading-4' style={{ float: 'left', width: '50%', textAlign: 'left', paddingLeft: '80px'}}>
                            <p  style={{ color: '#6F7176'}}>© Copyright GrowthOps. All rights reserved.</p>
                        </div>
                        <div className='text-white font-normal	text-xs	leading-4' style={{ float: 'left', position:'relative', width: '50%', textAlign: 'right', paddingRight: '80px'}}>
                            <a className='text-white cursor-pointer'><img src={ArrowUpRightFromSquareSolid} style={{ display: 'inline-block', width: '11px', height: '11px'}} className='mr-1'/> Go to global GrowthOps website</a>
                            <a className='text-white cursor-pointer	ml-12'>Privacy policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage