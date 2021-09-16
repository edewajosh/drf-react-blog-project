import React from 'react';
import PropTypes from 'prop-types';
import './login.css';
import splash from '../../images/medical.jpg';
import Signup from './Signup';


const Login = ({setNavbar, onSubmitForm, setToken}) => {
    // https://dribbble.com/shots/11879454-Sign-Up-Form

    
    // useEffect(() => {
    //     setNavbar(true)
    // }, [])

    return (
        <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
            <div className="row container-row">
                <div className="col-md-5">
                    <img src={splash} alt="Splash" className="login-image"/>
                </div>
                <div className="col-md-7 login-form">
                    <Signup onSubmitForm={ onSubmitForm} setToken={setToken}/>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login;