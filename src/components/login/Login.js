import React, { useEffect } from 'react';
import './login.css'
import splash from '../../images/gowen.jpg'
import Signup from './Signup';


const Login = ({setNavbar, onSubmitForm}) => {
    // https://dribbble.com/shots/11879454-Sign-Up-Form

    useEffect(() => {
        setNavbar(true)
    }, [])

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-5">
                    <img src={splash} alt="Splash" className="login-image"/>
                </div>
                <div className="col-md-7 login-form">
                    <Signup onSubmitForm={ onSubmitForm }/>
                </div>
            </div>
        </div>
    )
}

export default Login;