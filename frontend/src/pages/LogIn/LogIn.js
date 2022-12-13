import './LogIn.css';

import { DownMenu } from '../../components/DownMenu/DownMenu';
import { Link,useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import UserService from "../../Services/UserService"
import { useState, useEffect } from 'react';

export const LogIn = () => {
    const initialUserState = {
        id: null,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        date_birth: undefined,
        image: ""
      };

    const [user, setUser] = useState(initialUserState);
    const navigate = useNavigate();


    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };

    const onSubmit = (event) => {
        // saveUser()
    
        event.preventDefault();
    
        const params = {
          email: event.target.email.value,
          password: event.target.password.value,
        }
    
        UserService.login(params).then((response) => {
          console.log(response);
          const authheader = response.headers.get('Authorization');
          localStorage.setItem('token', authheader)
          localStorage.setItem('user',response.data.status.data.id)
          localStorage.setItem('userData',JSON.stringify(response.data.status.data))
          console.log(localStorage.getItem('token'))
          // console.log(localStorage.getItem())
          navigate('/Event')
        });

    }

    return (
        <>
            <Container className='container'>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="log-in-style">
                            <h2 className="log-in-title">Log In</h2>
                            <form onSubmit={onSubmit}>
                                <div className='log-in-field'>
                                    <input type="text" name='email' placeholder='Write your email' onSubmit={handleInputChange} required></input>
                                    <p className='log-in-hypertext'>Forgot Email?</p>
                                </div>

                                <div className='log-in-field'>
                                    <input type="password" name='password' placeholder='Write your password' onSubmit={handleInputChange} required></input>
                                    <p className='log-in-hypertext'>Forgot password?</p>
                                </div>

                                <div className='log-in-field'>
                                    <input type="password" placeholder='Repeat your password'></input>
                                </div>
                                <div>
                                    <div>
                                            <button type='submit' className="log-in-button">Log In</button>
                                    </div>

                                </div>
                            </form>
                            <div>
                                <h2 className='log-in-subtext'>Any Problem?</h2>
                                <Link to='/ContactUs'>
                                    <button className="log-in-button">Contact Us</button>
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