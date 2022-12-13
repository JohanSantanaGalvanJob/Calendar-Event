import { Link,useNavigate } from 'react-router-dom';
import './FirstPage.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


export const FirstPage = () => {

    const navigate = useNavigate();

    const Navigate = () => {
        navigate('/Home')
    }

    return (
        <>
                <div className='first-page-container' onClick={Navigate}>
                    <style>{'body { background-color: #CCF2F4;}'}</style>
                    <div className='first-page-image'>
                        <img src='./img/AppLogo.png'></img>
                    </div>
                    <h1 className='first-page-copyright'>© My Company</h1>
                </div>
        </>
    )
}