import React from 'react'
import logo from '../assets/logo.svg'
import  {Link} from 'react-router-dom'

function PreSignUp() {
    return (
        <div className='pre-signup'>
            <div className="container">
                <div className="content">
                    <div className="logo">
                        <img src={logo} alt='urudi logo' />
                    </div>
                    <p>Urudi allows both the artiste and fan to make interest</p>
                    <h1>Register now, in less than <br /> 5 minutes</h1>
                    <div>
                        <Link to='/signup'>
                            <button>Join as Artiste</button>
                        </Link>
                        &nbsp;
                        &nbsp;
                        <Link to='/signup'>
                            <button>Join as a fan</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PreSignUp
