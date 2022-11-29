import './ContactUs.css'

import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { DownMenu } from '../../components/DownMenu/DownMenu';


export const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <>
        <style>{'body { background-color: #F4F9F9;}'}</style>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="contact-us-style">
                            <h2 className="contact-us-title">Contact Us</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='contact-us-field'>
                                    <input type="text" placeholder='Write your email' required></input>
                                </div>
                                <div className='contact-us-field'>
                                    <input type="password" placeholder='Write your password' required></input>
                                </div>
                                <div className='contact-us-field'>
                                    <textarea placeholder='Write Here your Problem with the App'></textarea>
                                </div>
                                <Link to = '/Event'>
                                <button className="contact-us-button">Send Message</button>
                                </Link>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <DownMenu></DownMenu>
        </>
    )
}