import { Link } from 'react-router-dom';
import './Home.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


export const Home = () => {
    return (
        <>
         <Container className='sos'>
                <Row className="justify-content-center">
                    <Col xs={10} md={6}>
                        <div className="home-style">
                            <h2 className="home-title">Welcome to Event Calendar App</h2>
                            <div className="home-line"></div>
                            <p className="home-text">If you don't have an account</p>
                            <Link to="/SignUp">
                                <button className="home-button">Sign Up</button>
                            </Link>
                            <p className="home-text">Or, if you already signed</p>
                            <Link to="/LogIn">
                                <button className="home-button">Log In</button>
                            </Link>
                            <p className="home-text">You don't want to log or create account?</p>
                            <Link to='/Event'>
                                <button className="home-button">Continue</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='first-page-container'>
                <div  className='home-image-container'>
                    <img className='home-image' src='./img/AppLogo.png'></img>
                </div>
            </div>
            <style>{'body { background-color: #CCF2F4;}'}</style>
           
        </>
    )
}