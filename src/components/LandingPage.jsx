import React from 'react'
import logo from '../assets/logo.svg'
import footerlogo from '../assets/animalogo.svg'
import arrow from '../assets/dashicons_arrow-right-alt2.svg'
import celebs from '../assets/celeb-pictures.png'
import {Link} from 'react-router-dom'
import {Expo} from './Expo'
import earphones from '../assets/image.png'


function LandingPage() {
    return (
        <div>
            <div className="landing-page">
                <div className="background"></div>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="urudi logo" />
                    </div>
                    
                    <div className="nav-links">
                        <ul>
                            <li>
                                Home 
                                <hr />
                            </li>

                            <Link 
                                to='/about'
                                style={{textDecoration: 'none', cursor:'pointer'}}
                            >
                                <li>About</li>
                            </Link>
                            
                        </ul>
                    </div>

                    <button>Create free account</button>
                </nav>

                <body>
                    <section className='first-page'>
                        <div className="text">
                            <h1>
                                <span>Earn as you support</span> your 
                                <br />
                                favorite musician
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                <br />
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>

                            <div className='button-div'>
                                <input type="text" placeholder='example@gmail.com' />
                                <button>
                                    Get Notified
                                    <img src={arrow} alt="arrow" />
                                </button>
                            </div>
                        </div>
                        
                        <div className="celebs">
                            <Expo />
                        </div>
                    </section>

                    <section className='second-page'>
                        <div className="text">
                            <h1>What is Urudi?</h1>
                            <p>
                                Urudi is a network, bridging the gap between artistes and fans.
                                <br />
                                Urudi gives you the opportunity to make gains from the projects
                                <br />
                                of your favorite artistes. 
                                <br />
                                <br />
                                <b>HOW?</b>
                                <br />
                                <br />
                                Buy stocks of your idols with $URU, make profit as their value increases. 
                                <br />
                                Now you can cheer the names of your special celebrity and still, smile to the bank.
                            </p>
                        </div>
                            
                        <div className='image'>
                            <img src={earphones} alt="girl with headphones" />
                        </div>
                    </section>

                    <section className='third-page'>
                        <div className="container">
                            <img src={celebs} alt="celebs" className='celebs'/>
                        </div>
                        
                        <div className="text">
                            <h1>
                                Be more 
                                <br />
                                than a fan,
                                <br />
                                become a 
                                <br />
                                <span>Stakeholder</span>
                            </h1>

                            <Link 
                                to= '/about'
                                style={{textDecoration: 'none'}}
                            >
                                <button>
                                    Learn more
                                    <img src={arrow} alt="arrow" />
                                </button>
                            </Link>        
                        </div>
                       

                        
                           
                    </section>

                    <section className='fourth-page'>
                        <h1>
                            Sign up today,
                            <br />
                            in just 
                            <span> 5 minutes ⏰</span> 
                        </h1>

                        <button>
                            Create free account
                            <img src={arrow} alt="arrow" />
                        </button>
                    </section>
                </body>

                <footer>
                    <div className="footer-container">
                        <div className="logo">
                            <img src={footerlogo} alt='urudi logo' />
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

                        <div></div>
                        <div></div>
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
