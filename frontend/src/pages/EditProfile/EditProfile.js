import './EditProfile.css'

import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

export const EditProfile = props => {
    const [imgSrc, setImgSrc] = useState( ("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"));
    const [currentUser, setCurrentUser] = useState({});
    const user = localStorage.getItem('userData');


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const handleInputFileChange = event => {

        var file = event.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
    
        reader.onloadend = function (e) {
          setImgSrc(reader.result);
        };
    
        console.log(url) // Would see a path?
    
        setCurrentUser({ ...currentUser, image: file });
      };

    useEffect(() => {
        UserService.get(localStorage.getItem('user')).then((response) => {
            setCurrentUser(response.data)
            setImgSrc(response.data.image)
        }).catch()
    }, [])

    // const updateUser = () => {
    //     UserService.update(currentUser.id, currentUser)
    //         .then(response => {
    //             //props.updateList();
    //             // props.updateOne(response.data);
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    const updatePublished = event => {
        event.preventDefault()
        var data = {
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            date_birth: event.target.date_birth.value,
            email: event.target.email.value,
            image: event.target.image.files[0]

        };

        UserService.update(currentUser.id, data)
            .then(response => {
                //props.updateList();
                // props.updateOne(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };



    return (
        <>

            <h2 className='edit-profile-title'>Edit Profile</h2>


            <form onSubmit={updatePublished}>
                <div className='edit-profile-container'>

                    <div className='edit-profile-image-container'>
                        <div className="d-flex justify-content-center mb-4">
                            <Image roundedCircle src={ currentUser.image=imgSrc}

                                style={{ width: "200px", height:"200px" }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-primary btn-rounded">
                                <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                                <input name='image' type="file" className="form-control d-none" id="customFile2" required onChange={handleInputFileChange} />
                            </div>
                        </div>
                    </div>
                    <div className='edit-profile-input'>
                        <input type='text' name='first_name' required value={currentUser.first_name} onChange={handleInputChange} ></input>
                        <input type='text' name='last_name' required value={currentUser.last_name} onChange={handleInputChange} ></input>
                        <input type='text' name='email' required value={currentUser.email} onChange={handleInputChange} ></input>
                        <input type='date' name='date_birth' required value={currentUser.date_birth} onChange={handleInputChange} ></input>
                    </div>
                    <button type='submit' className="edit-profile-button">Edit</button>
                </div>
            </form>

            <DownMenu></DownMenu>
        </>
    )
}