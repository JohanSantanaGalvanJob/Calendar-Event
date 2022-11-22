import './LogIn.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export const LogIn = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="log-in-style">
                            <h2 className="title">Log In</h2>
                            <form>
                                <div className='field'>
                                    <input type="text" placeholder='Write your email' required></input>
                                    <p className='hypertext'>Forgot Email?</p>
                                </div>

                                <div className='field'>
                                    <input type="password" placeholder='Write your password' required></input>
                                    <p className='hypertext'>Forgot password?</p>
                                </div>

                                <div className='field'>
                                    <input type="password" placeholder='Repeat your password' required></input>
                                </div>
                                <div className='login-buttons'>
                                    <div className='login'>
                                        <button className="button">Log In</button>
                                    </div>
                                    <div className='extra'>
                                        <h2 className='subtext'>Any Problem?</h2>
                                        <button className="button">Contact Us</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}