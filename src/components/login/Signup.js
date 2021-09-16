
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const Signup = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmitForm = (formData) => {
        console.log('User name: ', formData.email)
        console.log('Password : ', formData.password)
    }

    return(
        <>
            <h2>Create Account </h2>
            <Form onSubmit={handleSubmit(onSubmitForm)} className="login">
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type="text" placeholder="Name" name="name" {...register('name', {required: true})}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type="email" placeholder="Enter email" name="email" {...register('email', {required: true})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name="password" {...register('password', {required: true})}/>
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
        </>
    )
}
export default Signup;