import './LogIn.css';

import { DownMenu } from '../../components/DownMenu/DownMenu';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import UserService from "../../Services/UserService"
import { useState, useEffect } from 'react';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import jsreport from 'jsreport-browser-client-dist'
import EventService from '../../Services/EventService';
jsreport.serverUrl = 'http://localhost:5488'


export const LogIn = (naviga5, email, password) => {

  const [events, setEvents] = useState([]);
  const navigate = useNavigate;



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
  


  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const mySwal = () => {

    swal.fire({
      title: 'Logged Correctly!',
      icon: 'success',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/Event')
        window.location.reload();
      }
    })

  }

  const mySwalError = (error) => {

    swal.fire({
      title: 'Oops Something went wrong!',
      icon: 'error',
      text: error,
    })

  }

  const onSubmit = (event) => {
    // saveUser()

    event.preventDefault();

    const params = {
      email: event.target.email?.value,
      password: event.target.password?.value,
    }



    UserService.login(params).then((response) => {
      console.log(response);
      const authheader = response.headers.get('Authorization');
      localStorage.setItem('token', authheader)
      localStorage.setItem('user', response.data.status.data.id)
      localStorage.setItem('userData', JSON.stringify(response.data.status.data))
      console.log(localStorage.getItem('token'))

      // console.log(localStorage.getItem())




    }).catch(e => {
      mySwalError(e)
      console.log(e);
    });

    mySwal()

  }

  // function checkPassword(){
  //     let password = document.getElementById("password").value
  //     let confirmPassword= document.getElementById('confirmPassword').value
  //     let message = document.getElementById('message')

  //     if (password.length != 0){
  //         if (password == confirmPassword){
  //             message.textContent= 'Password Confirmed'
  //         } else{
  //             message.textContent= 'Password do not match '
  //         }
  //     }
  // }

  return (
    <>
      <Container className='container'>
        <Row className="justify-content-center">
          <Col xs={8} md={6}>
            <div className="log-in-style">
              <h2 className="log-in-title">Log In</h2>
              <form onSubmit={onSubmit}>
                <div className='log-in-field'>
                  <input type="text" name='email' placeholder='Write your email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onSubmit={handleInputChange} required></input>
                </div>

                <div className='log-in-field'>
                  <input id='password' type="password" name='password' placeholder='Write your password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onSubmit={handleInputChange} required></input>
                </div>

                <div>
                  <div>
                    <button type='submit' className="log-in-button">Press to Log In</button>
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