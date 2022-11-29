import './SignUp.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { DownMenu } from '../../components/DownMenu/DownMenu';


export const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <>
            <Container className='container'>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="sign-up-style">
                            <h2 className="sign-up-title">Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='sign-up-field'>
                                    <input {...register("firstName", { required: true, maxLength: 20 })}
                                        aria-invalid={errors.firstName ? "true" : "false"} placeholder='Write your first name' />

                                    {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
                                </div>

                                <div className='sign-up-field'>
                                    <input {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder='Write your last name' required></input>
                                </div>
                                <div className='sign-up-field'>
                                    <input type="text" placeholder='Write your email' required></input>
                                </div>
                                <div className='sign-up-field'>
                                    <input type="password" placeholder='Write your password' required></input>
                                </div>
                                <div className='sign-up-field'>
                                    <input type="date" placeholder='Write your date of birth' required></input>
                                </div>
                                <Link to="/Event">
                                <button className="sign-up-button">Sign Up</button>
                                </Link>
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