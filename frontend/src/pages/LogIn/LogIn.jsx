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
                            <h2 className="log-in-title">Log In</h2>
                            <form>
                                <div className='log-in-field'>
                                    <input type="text" placeholder='Write your email' required></input>
                                    <p className='log-in-hypertext'>Forgot Email?</p>
                                </div>

                                <div className='log-in-field'>
                                    <input type="password" placeholder='Write your password' required></input>
                                    <p className='log-in-hypertext'>Forgot password?</p>
                                </div>

                                <div className='log-in-field'>
                                    <input type="password" placeholder='Repeat your password' required></input>
                                </div>
                                <div>
                                    <div>
                                        <button className="log-in-button">Log In</button>
                                    </div>

                                </div>
                            </form>
                            <div>
                                <h2 className='log-in-subtext'>Any Problem?</h2>
                                <button className="log-in-button">Contact Us</button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}