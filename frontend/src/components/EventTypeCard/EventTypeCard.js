import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './EventTypeCard.css'

import axios from 'axios';
import { useEffect, useState } from "react";
import React from "react";
import { IEventType } from "../../types/eventTypeData";
import { useNavigate, useParams } from "react-router-dom";

import EventTypeService from "../../Services/EventTypeService"

export const EventTypeCard = props => {

    const { id } = useParams();
    let navigate = useNavigate();

    const initialEventTypeState = {
        id: null,
        name: ""
    };

    const [currentEventType, setCurrentEventType] = useState(props.eventType);
    const [message, setMessage] = useState("");
    const [currentIndex, setCurrentIndex] = useState(-1);

    const setActiveEventType = (eventType, index) => {
        setCurrentEventType(eventType);
        setCurrentIndex(index);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentEventType({ ...currentEventType, [name]: value });
    };

    const updatePublished = status => {
        var data = {
            id: currentEventType.id,
            name: currentEventType.name
        };

        EventTypeService.update(currentEventType.id, data)
            .then(response => {
                setCurrentEventType({ ...currentEventType });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };

    const updateEventType = () => {
        EventTypeService.update(currentEventType.id, currentEventType)
            .then(response => {
                //props.updateList();
                props.updateOne(response.data);
                console.log(response.data);
                setMessage("The Event Type was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteEventType = () => {
        EventTypeService.remove(currentEventType.id)
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };



    //   React.useEffect(() => {
    //     axios.get(baseURL).then((response) => {
    //         setEventTypes(response.data);
    //     });
    // }, []);

    // //DELETE
    // const deleteEventType = (id: any) => {
    //     axios.delete(`http://localhost:3000/event_types/${id}`);
    //     setEventTypes(EventTypes.filter((post) => {
    //         return post.id !== id;
    //     })
    //     );
    // };

    // //UPDATE



    // if (!EventTypes) return null;

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

