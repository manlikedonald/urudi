import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'

function Login() {
    return (
        <div className='login-page'>
            <section className="logo-section">
                <div className='logo-container'>
                    <Link to='/'>
                        <div className="logo">
                            <img src={logo} alt='urudi logo' />
                        </div>
                    </Link>
                    <div className="login-text">
                        <h1>Welcome back</h1>
                        <input type="text" placeholder=' Username or email' />
                        <input type="text" placeholder=' Password' />
                        <div className="forgot-password">
                            <p>Forgot Password</p>
                            <button>Log In</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='picture-section'>
                <div className="container">
                    <div className="sign-up-button">
                        <Link to='/pre-signup'>
                            <button>
                                <b>Sign Up</b> 
                            </button> 
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
