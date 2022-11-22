import './SignUp.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export const SignUp = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="sign-up-style">
                            <h2 className="sign-up-title">Sign Up</h2>
                            <form>
                                <div className='sign-up-field'>
                                    <input type="text" placeholder='Write your first name' required></input>
                                </div>
                                <div className='sign-up-field'>
                                    <input type="text" placeholder='Write your last name' required></input>
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
                                <button className="sign-up-button">Sign Up</button>
                            </form>
                            <div className='sign-up-extra'>
                                <h2 className='sign-up-subtext'>Already Logged?</h2>
                                <button className="sign-up-button">Log In</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}