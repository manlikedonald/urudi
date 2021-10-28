import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import arrow from '../assets/dashicons_arrow-right-alt2.svg'
import headphonebabe from '../assets/image.png'
import musicplayer from '../assets/music-player.png'
import {ReactComponent as Tick} from '../assets/tick.svg'
import guy from '../assets/smiling.png'
import footerlogo from '../assets/animalogo.svg'


function AboutPage() {
    return (
        <div>
            <div className="about-page">
            <div className="background"></div>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="urudi logo" />
                    </div>
                    
                    <div className="nav-links">
                        <ul>
                            <Link 
                                to='/'
                                style={{textDecoration: 'none'}}
                            >
                                <li>Home</li>
                            </Link>
                            

                            <li>
                                About
                                <hr />
                            </li>
                           
                            
                        </ul>
                    </div>

                    <button>Create free account</button>
                </nav>
                <div className="body">
                    <section className='first-page'>
                        <div className="text">
                            <h1>
                                <span>We're closing the gap</span> between 
                                <br />
                                artistes and their fans
                            </h1>
                            <p>
                                Creating a tighter connection for fans and artistes so that love and wealth 
                                <br />
                                are distributed together as they both grow 
                            </p>

                            <div className='button-div'>
                                <input type="text" placeholder='example@gmail.com' />
                                <button>
                                    Get Notified
                                    <img src={arrow} alt="arrow" />
                                </button>
                            </div>

                            <div className='casette'>
                                {/* <Casette /> */}
                                <img src={headphonebabe} alt="lady with headphone" className='lady'/>
                                <img src={musicplayer} alt="music player" className='player' />
                            </div>
                        </div>
                    </section>
                    <section className='second-page'>
                        <div className="text">
                            <h1>Who are we?</h1>
                            <p>
                                We are a team of engineers that see and understand the amount of sweat that goes into every beautiful sound we hear.
                                <br />
                                We know the strength fanatics put into supporting artistes they love, so we decided to find ways for artistes and fans to earn economically from the art.
                                <br />
                                <br />
                                <b>We built this platform to:</b>
                                <br />
                                <br />
                                <span>
                                    <Tick className='tick'/>
                                    Help artistes engage directly with fans, get new ways to earn for their art and grow their wealth.
                                </span> 
                                <br />
                                <span>
                                    <Tick className='tick'/>
                                    Help fans earn from supporting the artistes they love and, grow the earnings as the artiste grows.
                                </span>
                            </p>
                        </div>

                        <div>
                            <img src={guy} alt="laughing guy" className='laughing-guy'/>
                        </div>
                    </section>
                    <section className='third-page'>
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
                </div>
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

export default AboutPage
