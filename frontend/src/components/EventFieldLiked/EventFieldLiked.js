import EventUserService from '../../Services/EventUserService';
import './EventFieldLiked.css';
import { useState, useEffect } from "react";


export const EventFieldLiked = props => {

    

    const user = JSON.parse(localStorage.getItem('userData'))
    const isUser = !!user;

    const getEventUsers = () => {
        const user = JSON.parse(localStorage.getItem('userData'))
        EventUserService.getAll().then(response => {
            console.log("response.data", response.data)
            for (let i = 0; i < response.data.length; i++) {
                if ((user.id == response.data[i].user_id) && (props.event.id == response.data[i].event_id)) {
                    deleteEventUser(response.data[i].id)
                }
            }
        })
            .catch(e => {
                console.log(e);
            });
    }



    const deleteEventUser = (id) => {

        EventUserService.remove(id).then(response => {
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });

    };

    return (
        <>
            <div className='event-field'>
                <div>
                    <img className='event-field-img' src={props.event.image}></img>
                </div>
                <div className='event-field-content'>
                    <h4 className='event-field-title'>{props.event.title}</h4>
                    <div className="event-field-line"></div>
                    <p>{props.event.description}</p>
                    {isUser ? (
                        <div className='event-field-icon'>
                            <img src='./icons/MenuAbajo/estrellanegro.png' onClick={getEventUsers}></img>
                        </div>
                    ) : null
                    }
                </div>
            </div>

        </>
    )
}