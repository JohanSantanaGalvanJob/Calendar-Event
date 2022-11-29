import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getAllEventType } from "../../Crud/EventTypeMethods";

import './EventTypeCard.css'

import axios from 'axios';
import { useEffect, useState } from "react";
import React from "react";
import { IEventType } from "../../types/eventTypeData";

export const EventTypeCard = () => {

    const baseURL = 'http://localhost:3000/event_types'
    const [EventTypes, setEventTypes] = useState<IEventType[]>([])
    const [state, setName] = useState({
        name:""
    });

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setEventTypes(response.data);
        });
    }, []);

    const deleteEventType = (id: any) => {
        axios.delete(`http://localhost:3000/event_types/${id}`);
        setEventTypes(EventTypes.filter((post) => {
            return post.id !== id;
        })
        );
    };

    const updateEventType = (id: any, name: any) => {
        axios.put(`http://localhost:3000/event_types/${id}`, {state }).then((res) => {
            console.log(res);
            console.log(res.data);
          });
    };


    const handleChange = (evt: { target: { value: any; name: any; }; }) => {
        const value = evt.target.value;
    
        setName({
          ...state,
          [evt.target.name]: value,
        });
      };

    if (!EventTypes) return null;

    return (
        <>
            {EventTypes.map((post: IEventType) => (
                <div className="event-type-card">
                    <div className='event-type-card-content'>

                        <h3 className='event-type-card-title'>{post.name}</h3>


                        <div className="event-type-card-line"></div>

                        <div className='event-type-card-input'>
                            <input type="text" name="name" value={state.name} onChange={handleChange}></input>
                        </div>

                           <div className="event-type-card-icons">
                            <IconButton onClick={(e) => deleteEventType(post.id)} color="error" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton  onClick={(e) => updateEventType(post.id,state.name)} color="primary" aria-label="edit">
                                <EditIcon />
                            </IconButton>

                        </div>

                    </div>
                 
                </div>

            ))}

        </>
    )
}

