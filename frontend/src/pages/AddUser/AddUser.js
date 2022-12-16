

import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import swal from 'sweetalert2';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { DownMenu } from '../../components/DownMenu/DownMenu';
import Navbar from '../../components/Sidebar/Navbar';
import UserService from '../../Services/UserService';
import { UserCard } from '../../components/UserCard/UserCard';

export const AddUser = () => {

    const user = JSON.parse(localStorage.getItem('userData'))




    const [users, setUsers] = useState([]);


    const getUsers = () => {
        UserService.getAll().then(response => {
            setUsers(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    }

    const singleDeleteList = (index) => () => {
        const ets = [...users];
        ets.splice(index,1)
        setUsers(ets);
    };

    useEffect(() => {
        getUsers();
        const user = JSON.parse(localStorage.getItem('userData'))
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <Container className='container'>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="sign-up-style">
                            <div>
                            </div>
                            <div>
                                <h2 className="sign-up-title">Users</h2>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            <div className="event-type-card-sos">
                {users.map((user, index) => <UserCard key={user.id} user={user} deleteOne={singleDeleteList(index)} ></UserCard>)}
            </div>
            <DownMenu></DownMenu>
        </>
    )
}