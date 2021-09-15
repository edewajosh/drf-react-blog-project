import React from 'react';
import { useForm } from 'react-hook-form';


const Login = () => {

    const {register, handleSubmit} = useForm()

    
    const onSubmitForm = (formData) => {
        console.log('User name: ', formData.username)
    }
    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <label htmlFor='username'>Username:</label>
            <input type='text' name='username' {...register('username', {required: true})}/>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' {...register('password', {required: true})}/>
            <input type='submit' value='Login'/>
        </form>
    )
}

export default Login;