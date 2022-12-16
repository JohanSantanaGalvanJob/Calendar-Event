import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert2';
import EventService from "../../Services/EventService";

export const EventCard = props => {


    const [currentEvent, setCurrentEvent] = useState(props.event);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const setActiveevent = (event, index) => {
        setCurrentEvent(event);
        setCurrentIndex(index);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentEvent({ ...currentEvent, [name]: value });
    };



    const deleteEvent = () => {

        const swalWithBootstrapButtons = swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swal.fire({
            title: 'Delete Event',
            text: 'Are you sure you want to delete the Event?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No, cancel!',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                EventService.remove(currentEvent.id)
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
                    'Event is safe',
                    'error'
                )
            }
        })

     
    };

    let UpdateUrl = `/UpdateEvent/${currentEvent.id}`;

    return (
        


        <div className="event-type-card">

            <div className='event-type-card-content'>

                <h3 className='event-type-card-title'>{props.event.title}</h3>


                <div className="event-type-card-line"></div>

                <div className="event-type-card-icons">
                    <IconButton onClick={deleteEvent} color="error" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <Link to={UpdateUrl}>
                        <IconButton color="primary" aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default EventCard;
