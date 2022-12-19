import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import swal from 'sweetalert2';

import './LocationCard.css'

import { useEffect, useState } from "react";

import LocationService from "../../Services/LocationService"

export const LocationCard = props => {

    const mySwalError = (error) => {

        swal.fire({
            title: 'Oops Something went wrong!',
            icon: 'error',
            text: error,
          })

      }

    const [currentLocation, setCurrentLocation] = useState(props.location);
    const [message, setMessage] = useState("");


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentLocation({ ...currentLocation, [name]: value });
    };

    const updatePublished = status => {
        var data = {
            id: currentLocation.id,
            name: currentLocation.name
        };

        LocationService.update(currentLocation.id, data)
            .then(response => {
                setCurrentLocation({ ...currentLocation });
                console.log(response.data);
            })
            .catch(e => {
               mySwalError(e);
                console.log(e);
            });

    };

    const updateLocation = () => {
        LocationService.update(currentLocation.id, currentLocation)
            .then(response => {
                //props.updateList();
                props.updateOne(response.data);
                console.log(response.data);
                setMessage("The Location was updated successfully!");
            })
            .catch(e => {
                mySwalError('Some error occured while updating' + e)
                console.log(e);
            });
    };

    const deleteLocation = () => {

        const swalWithBootstrapButtons = swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })

        swal.fire({
            title: 'Delete Location',
            text: 'Are you sure you want to delete the Location?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No, cancel!',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                LocationService.remove(currentLocation.id)
                .then(response => {
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
                  'Location is safe',
                  'error'
                )
              }
        })


       
    };

    return (

        <div className="location-card">

            <div className='location-card-content'>

                <h3 className='location-card-title'>{props.location.name}</h3>


                <div className="location-card-line"></div>

                <div className='location-card-input'>
                    <input type="text" id='name' name="name" value={currentLocation.name} onChange={handleInputChange} pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"></input>
                </div>

                <div className="location-card-icons">
                    <IconButton onClick={deleteLocation} color="error" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={updateLocation} color="primary" aria-label="edit">
                        <EditIcon />
                    </IconButton>

                </div>

            </div>

        </div>
    )
}

export default LocationCard;

