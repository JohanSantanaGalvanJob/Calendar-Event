import './SignUp.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useForm } from "react-hook-form";
import { DownMenu } from '../../components/DownMenu/DownMenu';
import UserService from "../../Services/UserService"
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";

const SignUp = () => {
  const [imgSrc, setImgSrc] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg");
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
      localStorage.setItem('token', authheader)
      localStorage.setItem('user',response.data.status.data.id)
      localStorage.setItem('userData',JSON.stringify(response.data.status.data))
      console.log(localStorage.getItem('token'))
      // console.log(localStorage.getItem())
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

    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      console.log("holaaaaaaaaaaa", reader.result)
      setImgSrc(reader.result);
    };

    console.log(url) // Would see a path?

    setUser({ ...user, image: file });
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

                  <div>
                    <div className="d-flex justify-content-center mb-4">
                      <Image roundedCircle src={imgSrc}
                        
                        style={{ width: "200px" }} />
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="btn btn-primary btn-rounded">
                        <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                        <input name='image' type="file" className="form-control d-none" id="customFile2" required onChange={handleInputFileChange} />
                      </div>
                    </div>
                  </div>





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