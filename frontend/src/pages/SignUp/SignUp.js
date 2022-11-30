import './SignUp.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { DownMenu } from '../../components/DownMenu/DownMenu';


export const SignUp = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        navigate('/Event')

        
    }
    return (
        <>
            <Container className='container'>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="sign-up-style">
                            <h2 className="sign-up-title">Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='sign-up-field'>
                                    <input {...register("firstName", {
                                        required: true,
                                        maxLength: 20,
                                        pattern: /^[A-Za-z]+$/i
                                    })} required type='text' maxLength={20} minLength={5} placeholder='Write your first name' pattern="[a-zA-Z]*" />
                                    {errors?.firstName?.type === "required" && <p>This field is required</p>}
                                    {errors?.firstName?.type === "maxLength" && (
                                        <p>First name cannot exceed 20 characters</p>
                                    )}
                                    {errors?.firstName?.type === "pattern" && (
                                        <p>Alphabetical characters only</p>
                                    )}
                                    <span className='sign-up-label' id='first-name-error'>*Alphabetical characters only</span>
                                </div>

                                <div className='sign-up-field'>
                                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} type='text' maxLength={20} minLength={5} pattern="[a-zA-Z]*" placeholder='Write your last name' required={true}>
                                    </input>
                                    {errors?.lastName?.type === "pattern" && (
                                            <p>Alphabetical characters only</p>
                                        )}
                                        <span className='sign-up-label'>*Alphabetical characters only</span>
                                </div>
                                <div className='sign-up-field'>
                                    <input type="email" placeholder='Write your email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required={true}></input>
                                </div>
                                <div className='sign-up-field'>
                                    <input type="password" placeholder='Write your password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required={true}></input>
                                    <span className='sign-up-label'>*One capital letter. + 8 characters</span>
                                </div>
                                <div className='sign-up-field'>
                                    <input type="date" placeholder='Write your date of birth' required={true}></input>
                                </div>
                                    <button type='submit' className="sign-up-button">Sign Up</button>
                            </form>
                            <div className='sign-up-extra'>
                                <h2 className='sign-up-subtext'>Already Logged?</h2>
                                <Link to="/LogIn">
                                    <button className="sign-up-button">Log In</button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <DownMenu></DownMenu>
        </>
    )
}