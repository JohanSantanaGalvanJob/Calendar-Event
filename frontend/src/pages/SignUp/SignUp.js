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
    const onSubmit = data => {
        navigate('/Event')
    }

    const initialUserState = {
        id: null,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        date_birth: undefined
    };

    const [users, setUsers] = useState([]);

    const [user, setUser] = useState(initialUserState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = () => {
        var data = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            date_birth: user.date_birth

        };

        UserService.signUp(data).then(response => {
            setUser({
                id: response.data.id,
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                email: response.data.email,
                password: response.data.password,
                date_birth: response.data.date_birth
            });
            setSubmitted(true);
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });

    };

    const newUser = () => {
        setUser(initialUserState);
        setSubmitted(false);
    };

    // const getUsers = () => {
    //     UserService.getAll().then(response => {
    //         setUsers(response.data);
    //         console.log(response.data);
    //     })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    useEffect(() => {
        // getUsers();
    }, []);
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
                                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                        <button type='submit' className="sign-up-button" onClick={saveUser}>Sign Up</button>
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