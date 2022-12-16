import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert2';
import UserService from "../../Services/UserService";

export const UserCard = props => {


    const [currentUser, setCurrentUser] = useState(props.user);


    const deleteUser = () => {

        const swalWithBootstrapButtons = swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swal.fire({
            title: 'Delete User',
            text: 'Are you sure you want to delete the User?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No, cancel!',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                UserService.remove(currentUser.id)
                    .then(response => {
                        props.deleteOne();
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'User is safe',
                    'error'
                )
            }
        })

     
    };

    return (
        


        <div className="event-type-card">

            <div className='event-type-card-content'>

                <h3 className='event-type-card-title'>{props.user.email}</h3>


                <div className="event-type-card-line"></div>

                <div className="event-type-card-icons">
                    <IconButton onClick={deleteUser} color="error" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>

                </div>

            </div>

        </div>
    )
}

export default UserCard;
