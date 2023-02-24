import { Link,useNavigate } from 'react-router-dom';
import './FirstPage.css';
import EventUserService from '../../Services/EventUserService';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useEffect } from 'react';


export const FirstPage = () => {

    useEffect(() => {

        EventUserService.getAll().then(response => {
            console.log("response.data", response.data)
            localStorage.setItem('eventsDeleted', response.data.id)
        })
            .catch(e => {
             console.log(e);
            });

    },[])

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