import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import logo from '../assets/logo.svg'
import laughImage from '../assets/laugh.png'
import uru from '../assets/logo1.svg'
import token from '../assets/buy-fan-token.svg'
import nft from '../assets/nft.svg'
import tick from '../assets/tick.svg'
import hamburger from '../assets/bars-solid.svg'
import x from '../assets/times-solid.svg'
import arrow from '../assets/dashicons_arrow-right-alt2.svg'

function AboutPage() {
    const [showPopUp, setShowPopUp] = useState(false)
    const [menuClick, setMenuClick] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 560px)' })

    return (
        <div>
            <div className="about-page">
                <nav className="navbar">
                    <div className='nav-container'>
                    {/* {isMobile ? 
                        <div className='for-mobile-view'>
                            <Link
                                to='/'
                            >
                                <div className="logo1">
                                    <img src={logo} alt='urudi logo' />
                                </div>
                            </Link>

                            <div className='menu-bar' 
                                onClick= {() => setMenuClick(true)}
                            >
                                <img src={hamburger} alt="menu" className='hamburger' />
                            </div>

                            <div 
                                className="hamburger-popup"
                                style={{display: menuClick ? 'block' : 'none'}}
                            >
                                <header>
                                    <Link
                                        to='/'
                                    >
                                        <div className="logo1">
                                            <img src={logo} alt='urudi logo' />
                                        </div>
                                    </Link>
                                    <div 
                                        className="x"
                                        onClick={() => setMenuClick(false)}
                                    >
                                        <img src={x} alt="X" />
                                    </div>
                                </header>
                                <div className="content">
                                    <Link
                                        to='/'
                                        style={{textDecoration: 'none'}}
                                    >
                                        <p>Home</p>
                                    </Link>
                                    

                                    <Link 
                                        to='/about'
                                        style={{textDecoration: 'none'}}
                                    >
                                        <p>About</p>
                                    </Link>
                                    
                                    <p className='product-div'>
                                        <span>Product</span>
                                        <img src={arrow} alt="arrow" className='arrow'/>
                                    </p>
                                

                                </div>
                                
                            </div>
                        </div> : ''} */}

                        {/* the navbar code above is for mobile view only */}
                        
                        {/* the code below is the navbar code for screens larger than 560px(mobile view) */}

                        <div className="logo">
                            <img src={logo} alt='urudi logo' />
                        </div>
                        <div className="nav-links">
                            <ul>
                                <Link 
                                    to='/'
                                    style={{textDecoration: 'none'}}
                                >
                                        <li>Home</li>
                                </Link>
                                {/* <Link 
                                    to='/about'
                                    style={{textDecoration: 'none'}}
                                >
                                        <li>About</li>
                                </Link> */}
                                {/* <li 
                                    // Change to onMouseOver = {() => setShowPopUp(true)} when you're ready for popup to show
                                    onMouseOver= {() => setShowPopUp(false)} 
                                    onMouseOut= {() => setShowPopUp(false)}
                                >
                                        Product
                                </li> */}
                            </ul>
                        </div>
                        
                        {/* Popup shows when you hover on 'Product' in the navbar */}
                        {/* <div className="pop-up" 
                            style={{display: showPopUp ? 'block' : 'none'}}
                            // Change to onMouseOver = {() => setShowPopUp(true)} when you're ready for popup to show
                            onMouseOver= {() => setShowPopUp(false)} 
                            onMouseOut= {() => setShowPopUp(false)}
                        >
                            <div className='pop-up-content'>
                                <div className="buy-uru">
                                    <img src={uru} alt="uru logo" />
                                    <font>
                                        <p>
                                            <b>Buy Urucoin</b>
                                        </p>
                                        <p>Get Urucoin, exchange for fan tokens and NFTs</p>
                                    </font>
                                </div>
                                <div className="buy-uru">
                                    <img src={token} alt="fan token" />
                                    <font>
                                        <p>
                                            <b>Buy fan token</b>
                                        </p>
                                        <p>Invest in your favorite artistes by buying fan tokens with your Urucoin</p>
                                    </font>
                                </div>
                                <div className="buy-uru">
                                    <img src={nft} alt="nft" />
                                    <font>
                                        <p>
                                            <b>Get NFT</b>
                                        </p>
                                        <p>Buy and sell NFT</p>
                                    </font>
                                </div>
                            </div>
                        </div>
                        <div className="login-button">
                            <button className='login'>
                                <b>Log In</b> 
                            </button>
                        </div> */}
                    </div>
                </nav>
                <div className="body">
                    <section className='first-section'>
                        <div className="first-section-container">
                            <div className="first-section-text">
                                <h1>We’re closing the gap between artistes and their fans</h1>
                            </div>
                        </div>
                        
                    </section>
                    <section className='second-section'>
                        <div className="second-section-container">
                            <div>
                                <h1>Who are we?</h1> 
                            </div>
                            <div className="border"></div>
                            <div className='second-section-p'>
                                <p>
                                    We are a team of engineers that see and understand the amount of sweat that goes into every beautiful sound we hear. 
                                    We know the strength fanatics put into supporting artistes they love, so we decided to find ways for artistes and fans to earn economically from the art. <br />
                                    <br />
                                    <span className='why-we-built-urudi'>
                                        We built this platform to: <br />
                                        <br />
                                        <span>
                                            <img src={tick} alt="tick" align='left' className='tick'/>
                                            <span className='about-span'>
                                                Help artistes engage directly with fans, get new ways to earn for their art and grow their wealth.
                                            </span>
                                        </span>
                                        <br />
                                        <br />
                                        <span>
                                            <img src={tick} alt="tick" align='left' className='tick'/> 
                                            <span className='about-span'>
                                                Help fans earn from supporting the artistes they love and, grow the earnings as the artiste grows.    
                                            </span>   
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className='fifth-section'>
                        <div className="fifth-section-container">
                            <h1>
                                Sign up today, in just <br />
                                5 minutes ⏰ 
                            </h1>
                            <button>
                                <b>Join Waitlist </b> &nbsp; <img src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </section>
                </div>
                <footer>
                    <div className="footer-container">
                        <div className="logo">
                            <img src={logo} alt='urudi logo' />
                        </div>
                        <div className='footer-text'>
                            <p>
                                <b>Product</b>
                            </p>
                            <p>Buy $URU</p>
                            <p>NFTs</p>
                        </div>
                        <div className='footer-text'>
                            <p>
                                <b>Company</b>
                            </p>
                            <p>About</p>
                            <p>Contact Us</p>
                        </div>
                        {/* <div className='footer-text'>
                            <p>
                                <b>Resources</b>
                            </p> 
                            <p>Privacy</p>
                            <p>Terms & Conditions</p>
                        </div>        */}
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default AboutPage
