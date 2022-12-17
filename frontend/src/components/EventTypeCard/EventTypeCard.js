import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './EventTypeCard.css'

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import EventTypeService from "../../Services/EventTypeService"

import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

export const EventTypeCard = props => {

    const { id } = useParams();
    let navigate = useNavigate();


    const [currentEventType, setCurrentEventType] = useState(props.eventType);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const setActiveEventType = (eventType, index) => {
        setCurrentEventType(eventType);
        setCurrentIndex(index);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentEventType({ ...currentEventType, [name]: value });
    };

    const updateEventType = () => {
        EventTypeService.update(currentEventType.id, currentEventType)
            .then(response => {
                //props.updateList();
                props.updateOne(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteEventType = () => {

        const swalWithBootstrapButtons = swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })

        swal.fire({
            title: 'Delete Event Type',
            text: 'Are you sure you want to delete the Event Type?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No, cancel!',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                EventTypeService.remove(currentEventType.id)
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
                  'Event Type is safe',
                  'error'
                )
              }
        })


    };

    return (

        <div className="event-type-card">

            <div className='event-type-card-content'>

                <h3 className='event-type-card-title'>{props.eventType.name}</h3>


                <div className="event-type-card-line"></div>

                <div className='event-type-card-input'>
                    <input type="text" id='name' name="name" value={currentEventType.name} onChange={handleInputChange}></input>
                </div>

                <div className="event-type-card-icons">
                    <IconButton onClick={deleteEventType} color="error" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={updateEventType} color="primary" aria-label="edit">
                        <EditIcon />
                    </IconButton>

                </div>

            </div>

        </div>
    )
}

export default EventTypeCard;

