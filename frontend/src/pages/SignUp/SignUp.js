import './SignUp.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { DownMenu } from '../../components/DownMenu/DownMenu';
import UserService from "../../Services/UserService"
import { useState, useEffect } from 'react';

const SignUp = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (event) => {
    // saveUser()

    event.preventDefault();

    const params = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      password: event.target.password.value,
      date_birth: event.target.date_birth.value,
      image: event.target.image.files[0]
    }

    UserService.signUp(params).then((response) => {
      console.log(response);
      const authheader = response.headers.get('Authorization');
      authheader.replace("Bearer ","")
      localStorage.setItem('token', authheader)
      console.log(localStorage.getItem('token'))
    });

    navigate('/Event')
  }

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

  const handleInputFileChange = event => {
    const { name, files } = event.target;
    setUser({ ...user, [name]: files[0] });
  };

  return (
    <>
      <Container className='container'>
        <Row className="justify-content-center">
          <Col xs={8} md={6}>
            <div className="sign-up-style">
              <div>
              </div>
              <div>
                <h2 className="sign-up-title">Sign Up</h2>

                <form onSubmit={onSubmit}>
                  
                
                    <input id='image' name='image' type="file" required onChange={handleInputFileChange}></input>
                  

                  <div className='sign-up-field'>
                    <input id='firstname' name='firstname' value={user.firstname} onChange={handleInputChange} required type='text' maxLength={20} minLength={5} placeholder='Write your first name' pattern="[a-zA-Z]*" />
                    <span className='sign-up-label' id='first-name-error'>*Alphabetical characters only</span>
                  </div>

                  <div className='sign-up-field'>
                    <input id='lastname' name='lastname' value={user.lastname} onChange={handleInputChange} type='text' maxLength={20} minLength={5} pattern="[a-zA-Z]*" placeholder='Write your last name' required={true}>
                    </input>
                    <span className='sign-up-label'>*Alphabetical characters only</span>
                  </div>
                  <div className='sign-up-field'>
                    <input id='email' name='email' value={user.email} onChange={handleInputChange} type="email" placeholder='Write your email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required={true}></input>
                  </div>
                  <div className='sign-up-field'>
                    <input id='password' name='password' value={user.password} onChange={handleInputChange} type="password" placeholder='Write your password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required={true}></input>
                    <span className='sign-up-label'>*One capital letter. + 8 characters</span>
                  </div>
                  <div className='sign-up-field'>
                    <input id='date_birth' name='date_birth' value={user.date_birth} onChange={handleInputChange} type="date" placeholder='Write your date of birth' required={true}></input>
                  </div>
                  <button type='submit' className="sign-up-button">Sign Up</button>
                </form>

                <div className='sign-up-extra'>
                  <h2 className='sign-up-subtext'>Already Logged?</h2>
                  <Link to="/LogIn">
                    <button className="sign-up-button">Log In</button>
                  </Link>
                </div>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
      <DownMenu></DownMenu>
    </>
  )
}

export default SignUp