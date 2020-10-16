import React from 'react'
import { Link } from 'react-router-dom'
import headerImg from '../assets/freelancing.png'

function Home() {
    return (
        <>
            <div className="container">
                <div className="row hero-text">
                    <div className="col-md-6 pb-3">
                        <h2 className="welcome-text mb-5">Welcome To ICES CMS!</h2>
                        <p className="welcome-para">Check out this cms created with React<br /> and NODE Js.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={headerImg} alt="header image" className="heroImage" />
                    </div>
                </div>
            </div>
            <div className="cta-box">
                <div className="container">
                    <h2 className="cta-header">Register/Login To Start Posting</h2>
                    <p className="lead my-3" >Do you want to start posting and creating content? Sign up or login now to get started.</p>
                    <div className="buttons">
                        <button className="btn btn-primary cta-button"><Link to="/register">Sign Up</Link></button>
                        <button className="btn btn-primary cta-button"><Link to="/login">Login</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
