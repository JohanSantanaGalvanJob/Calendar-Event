import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './LocationCard.css'

import axios from 'axios';
import { useEffect, useState } from "react";
import React from "react";
import { IEventType } from "../../types/eventTypeData";
import { useNavigate, useParams } from "react-router-dom";

import LocationService from "../../Services/LocationService"

export const LocationCard = props => {

    const { id } = useParams();
    let navigate = useNavigate();

    const initialLocationState = {
        id: null,
        name: ""
    };

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
                console.log(e);
            });
    };

    const deleteLocation = () => {
        LocationService.remove(currentLocation.id)
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

        <div className="location-card">

            <div className='location-card-content'>

                <h3 className='location-card-title'>{props.location.name}</h3>


                <div className="location-card-line"></div>

                <div className='location-card-input'>
                    <input type="text" id='name' name="name" value={currentLocation.name} onChange={handleInputChange}></input>
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

