import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Signup = (setToken) => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmitForm = async (formData, e) => {
        e.preventDefault()
        console.log('User name: ', formData)
        console.log('Password : ', formData.password)
        const token = await loginUser({
            formData
        });
        setToken(token)
    }

    // authenticate user
    const loginUser = async (credentials) => {
        const res = await fetch(`http://localhost:8000/api/token`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })

        const data = await res.json()
        setToken(data.access_token)
    }

    return(
        <div className="signup-signin">
            <h2 className="create-acount">Create Account </h2>
            <div className="social-login">
                <IconContext.Provider value={{size: 30}}>
                    <FaFacebookF className="social-account"/> 
                    <FaGoogle className="social-account"/> 
                    <FaTwitter className="social-account"/> 
                    <FaLinkedin className="social-account"/> 
                </IconContext.Provider>
            </div>
            <p className="text-center mt-4">Or use your email for registration:</p>
            <Form onSubmit={handleSubmit(onSubmitForm)} className="login">
                <Form.Group className='mb-3' controlId='formBasicUsername'>
                    <Form.Control type="text" placeholder="Name" name="name" className="input-field" {...register('name', {required: true})}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type="email" placeholder="Enter email" name="email" className="input-field" {...register('email', {required: true})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name="password" className="input-field" {...register('password', {required: true})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree to the Terms and privacy conditions" />
                </Form.Group>
                    { errors.message && errors.message.message }
                <div className="row">
                    <div className="col-md-6">
                        <Button variant="primary" type="submit" className="text-center btn-signup btn-danger">Sign Up</Button>
                    </div>
                    <div className="col-md-6">
                        <Button variant="primary" type="submit" className="text-center btn-login btn-light btn-outline-danger">Sign In</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}
export default Signup;