import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from "aos";

const Styles = styled.div`
    .page-body.page-about {
        padding-bottom: 0;
        padding-top:0;
    }

    .AboutUs {
        padding-top: 5.5rem;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    .site section:first-of-type {
        margin-top: 0.5rem;
    }
    .mission {
        margin-top: 4rem;
        margin-right: 0px;
        margin-bottom: 4rem;
        margin-left: 0px;
    }
    @media (max-width: 35rem)
    .ourMission:not(.rounded) .ourMissionWrap {
        border-radius: 0;
    }
    @media (max-width: 35rem)
    .ourMissionWrap {
        padding: 3rem 1rem;
}
    @media (max-width: 64rem)
    .ourMissionWrap {
        padding: 3rem 2rem 5.625rem;
}
    @media (max-width: 90rem)
    .container {
        width: 100%;
        padding: 0 4.5rem;
        display: flex;
    }
    .container {
        margin: 0 auto;
    }
    .missionWrap {
        border-radius: 1rem;
        padding: 6rem 6.875rem;
        background: linear-gradient(90deg, #016eff, #4092FF, #016eff);
        display: flex;
        flex-direction: row;
    }

    .missionTitle {
        font-size: 2.5rem;
        line-height: 108%;
        letter-spacing: -.02em;
    }
    h1 span {
        color: cyan;
    }
    .benefitsBlockItemText {
        opacity: .9;
    }
    p {
        font-size: 1.1rem;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .team {
        margin: 4rem 0;
    }
    .teamBlock {
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 4rem;
    }
    .teamBlockItem {
        display: grid;
        grid-template-columns: 32.528% 64.472%;
        background: #f1f4f6;
        border-radius: 1rem;
        padding: 6rem 6.875rem;
    }
    .teamBlockItemImg {
        position: relative;
        border-radius: 0.5rem;
        overflow: hidden;
        width: 100%;
        height: 100%;
        min-height: 25rem;
    }
    .teamBlockItemContent {
        padding-left: 5.625rem;
    }
    @media (max-width: 64rem)
    .teamBlockItemImg {
        height: auto;
        min-height: auto;
        padding-top: 113.334%;
    }
    @media (max-width: 64rem)
    .teamBlockItemContent {
        padding-left: 1.5rem;
    }
    @media (max-width: 64rem)
    .teamBlockItemContentName {
        font-size: 1.625rem;
    }
    .teamBlockItemContentName {
        font-weight: 600;
        font-size: 1.75rem;
        line-height: 120%;
        color: #111112;
        margin-bottom: 1rem;
    }
    .teamBlockItemContentPosition {
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #494d53;
    }
    .teamBlockItemContentInfo {
        line-height: 154%;
        font-size: 1.125rem;
    }
    .videoContainer {
        position: relative;
        max-height: 75vh;
        overflow: hidden;
        margin-bottom: 48px;
    }
    .videoContainer-hero {
        width: 100%;
        height: 85vh
        background-image: linear-gradient(rgba(12,3,51,0.3), rgba(12,3,51,0.3));
    }
       
    
    .vidContent {
        text-align: center;

    }

    .vidContent h1 {
        text-align: center;
        padding-top: 24%;
        font-size: 70px;
        color: #fff;
        font-weight: 600;
    }

    .vidContent a{
        text-align: center;
        text-decoration: none;
        display: inline-block;
        color: #fff;
        &:hover { color: lightgrey; }
        font-size: 24px;
        border: 2px solid #fff;
        &:hover { border-color: lightgrey; }
        padding: 14px 70px;
        border-radius: 50px;
        margin-top: 20px;
    }
    .backVideo {
        width: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;
        padding-bottom: 3.2%;
    }
    @media (min-aspect-ratio: 16/9){
        .backVideo .vidContent a .vidContent h1 .vidContent
        .missionWrap .missionTitle .missionBlockText p .missionBlockItem p {
            width: 100%;
            height: auto;
        }
    }
`



 const Mission = () => {
    return (
        <Styles>
        <section className='mission'>
                        <div className='container'>
                            <div className='missionWrap' style={{ color: "#ffffff"}}> 
                                <div className='missionContent'>
                                    <h1 className='missionTitle aos-animate aos-init' data-aos="fade-right">
                                        FetchTek is 
                                        <span> revolutionising </span>
                                        existing tech marketplaces
                                    </h1>
                                </div>
                                <div className='missionBlock'> 
                                    <div className='missionBlockItem aos-animate aos-init' 
                                    data-aos="fade-left" data-aos-delay="0">
                                        <div className='missionBlockText'>
                                            <p>
                                                FetchTek was created and developed for the purpose of a platform that
                                                unifies the tech market and simplies the trade of electronics. By using 
                                                the FetchTek platform, consumers and business-owners can streamline processes 
                                                that were once difficult to manage.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='missionBlockItem aos-animate aos-init' 
                                    data-aos="fade-left" data-aos-delay="0">
                                        <div className='missionBlockText'>
                                            <p>
                                            Our mission is to build the world’s most convenient way to trade,
                                            empowering worldwide users to technological innovation. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className='missionBlockItem aos-animate aos-init' 
                                    data-aos="fade-left" data-aos-delay="0">
                                        <div className='missionBlockText'>
                                            <p>
                                                With the use of deep industry connections, our platform is designed
                                                to provide all tools necessary for easy, secure, and fast transactions 
                                                for buyers and sellers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

        </Styles>
    )
} 


const TeamMustafa = () => {
    return(
        <Styles>
        <section className='team'>
            <div className='container'>
                <div className='teamBlock'>
                    <div className='teamBlockItem aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">
                        <div className='teamBlockItemImg aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">
                        </div>
                        <div className='teamBlockItemContent'>
                            <h2 className='teamBlockItemContentName'>Mustafa Aljumayli</h2>
                            <h5 className='teamBlockItemContentPosition'>Founder & CEO</h5>
                            <div className='teamBlockItemContentInfo'>
                                <div className='page' title="Page 1">
                                    <div className='section'>
                                        <div className='layout'>
                                            <div className='column'>
                                                <p>Mustafa Aljumayli is the Founder and CEO at FetchTek</p>
                                                <p>
                                                    Mustafa brings a wealth of knowledge through his role as Founder at FetchTek.
                                                    He began repairing and trading phones in 2019 alongside a background in sales,
                                                    real estate, and marketing. 
                                                </p>
                                                <p>
                                                    Most recently, he has been actively involved in the technological innovations
                                                    at FetchTek, leading a development team to organize features that will optimize
                                                    user experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Styles>
    )
} 
const TeamYusuf = () => {
    return(
        <Styles>
        <section className='team'>
            <div className='container'>
                <div className='teamBlock'>
                    <div className='teamBlockItem aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">
                        <div className='teamBlockItemImg aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">
                        </div>
                        <div className='teamBlockItemContent'>
                            <h2 className='teamBlockItemContentName'>Yusuf Baloch</h2>
                            <h5 className='teamBlockItemContentPosition'>Co-Founder & COO</h5>
                            <div className='teamBlockItemContentInfo'>
                                <div className='page' title="Page 1">
                                    <div className='section'>
                                        <div className='layout'>
                                            <div className='column'>
                                                <p>Yusuf Baloch is the Co-Founder and COO at FetchTek</p>
                                                <p>
                                                    Yusuf has an outstanding array of experience in the phone trading industry.
                                                    His experiences include marketing, sales, and real estate. Yusuf has been trading
                                                    electronics for 8 years, and has amassed a portfolio of businesses as clientele in
                                                    the industry.
                                                </p>
                                                <p>
                                                    Most recently, Yusuf has been involved in the operational advances at FetchTek.
                                                    He uses his extensive knowledge of the electronics sales lifecycle to optimize the
                                                    day-to-day operations of FetchTek.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Styles>
    )
} 

const src = 'https://player.vimeo.com/video/735732663?h=b00d239f9e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479';

const Autoloop = () => {
    return (
        <Styles>
            <div id="background" className='autoLoopHero'>
                <div id="video" className='videoHero'>
                    <div className='videoContainer-hero'>
                        <div className='videoPlayer'>
                            <meta author='Videvo'></meta>
                            <iframe src="https://player.vimeo.com/video/735732663?h=b00d239f9e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                            width='100%'
                            height='100%'
                            frameborder="0" 
                            allow="autoplay; full" 
                            allowfullscreen title="211130_03_Business_4k_037.mp4"
                            preload='auto'
                            className='backVideo'>
                            </iframe>
                        </div>
                            
                    <div className='vidContent'>
                        <h1>Too Busy? Let Us Do The Heavy Lifting</h1>
                        <a href='./how-it-works'>Learn More</a>
                    </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

const AboutUsEffect = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
      return (
        <Styles>
        <div id="page" className='AboutUs'>
            <div id="primary" className='content-area'>
                <main id="main" className='siteMain'>
                <Mission />
                <TeamMustafa />
                <TeamYusuf />
                </main>
            </div>
        </div>
        </Styles> 
      )   
}
function AboutUs() {
    return (
        <>
            <AboutUsEffect />
        </>
    );
}
export default AboutUs; 

