import React, {useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import lady from '../assets/image.svg'
import arrow from '../assets/dashicons_arrow-right-alt2.svg'
import wizkid from '../assets/wizkid.svg'
import ayra from '../assets/ayra.svg'
import fireboy from '../assets/fireboy.svg'
import tems from '../assets/tems.svg'
import handshake from '../assets/handshake.png'
import uru from '../assets/logo1.svg'
import token from '../assets/buy-fan-token.svg'
import nft from '../assets/nft.svg'
import hamburger from '../assets/bars-solid.svg'
import x from '../assets/times-solid.svg'

function LandingPage() {
    const [showPopUp, setShowPopUp] = useState(false)
    const [menuClick, setMenuClick] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 560px)' })
    return (
        <div>
            <div className="landing-page">
                <nav className="navbar">
                    <div className='nav-container'>
                        {/* {isMobile ? 
                        <div className='for-mobile-view'>
                            <div className="logo1">
                                <img src={logo} alt='urudi logo' />
                            </div>

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
                                    <div className="logo1">
                                        <img src={logo} alt='urudi logo' />
                                    </div>
                                    <div 
                                        className="x"
                                        onClick={() => setMenuClick(false)}
                                    >
                                        <img src={x} alt="X" />
                                    </div>
                                </header>
                                <div className="content">
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
                                
                                    <button>
                                        Log In
                                    </button>

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
                                {/* <Link 
                                    to='/'
                                    style={{textDecoration: 'none'}}
                                >
                                        <li>Home</li>
                                </Link> */}
                                <Link 
                                    to='/about'
                                    style={{textDecoration: 'none'}}
                                >
                                        <li>About</li>
                                </Link>
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
                        <div className="pop-up" 
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
                        {/* <div className="login-button">
                            <Link to='/login'>
                                <button className='login'>
                                    <b>Log In</b> 
                                </button>
                            </Link>
                        </div> */}
                    </div>
                </nav>
                <div className="body">
                    <section className='first-section'>
                        <div className="first-section-container">
                            <div className="first-section-text">
                                <p>With Urudi you can make profit, as a fan</p>
                                <hr />
                                <h1>Earn as you support your favorite musician</h1>
                                {/* <Link to='/pre-signup'> */}
                                    <button>
                                        <b>Join Waitlist </b> &nbsp; <img src={arrow} alt="arrow" />
                                    </button>
                                {/* </Link> */}
                            </div>
                            <div className="first-section-image">
                                <img src={lady} alt="smiling lady" />
                            </div>
                        </div>
                        
                    </section>
                    <section className='second-section'>
                        <div className="second-section-container">
                            <div>
                            <h1>What is Urudi?</h1> 
                            </div>
                            <div className="border"></div>
                            <div className='second-section-p'>
                                <p>
                                    Urudi gives you the opportunity to make gains from the projects of your favorite artistes. <br />
                                    Buy stocks of your idols with $URU, make profit as their value increases. <br />
                                    Now you can cheer the names of your special celebrity and still, smile to the bank.
                                </p>
                            </div>
                            
                        </div>
                    </section>
                    <section className='third-section'>
                        <div className="third-section-container">
                            <div className="images">
                                <img src={wizkid} alt="wizkid" />
                                <img src={tems} alt="tems" />
                                <img src={fireboy} alt="fireboy" />
                                <img src={ayra} alt="ayra" />
                                {/* <img src={omah} alt="omah lay" style={{width: '360px', height: '585px'}}/> */}
                            </div>
                            
                        </div>
                    </section>
                    <section className='fourth-section'>
                        
                        <div className="fourth-section-container">

                            <img src={handshake} alt="handshake" />
                            <h1>
                                Be more than a fan, become a  <span>STAKEHOLDER</span>
                            </h1>
                        </div>
                    

                    </section>
                    <section className='fifth-section'>
                        <div className="fifth-section-container">
                            <h1>
                                Sign up today, in just <br />
                                5 minutes ⏰ 
                            </h1>
                            {/* <Link to='/pre-signup'> */}
                                <button>
                                    <b>Join Waitlist </b> &nbsp; <img src={arrow} alt="arrow" />
                                </button>
                            {/* </Link> */}
                        </div>
                    </section>
                </div>
                <footer>
                    <div className="footer-container">
                        <div className="logo">
                            <img src={logo} alt='urudi logo' />
                        </div>
                        <div className='footer-text footer-product'>
                            <p>
                                <b>Product</b>
                            </p>
                            <p>Buy $URU</p>
                            <p>NFTs</p>
                        </div>
                        <div className='footer-text footer-company'>
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

export default LandingPage
