import EventUserService from '../../Services/EventUserService';
import './EventFieldLiked.css';
import { useState, useEffect } from "react";
import swal from 'sweetalert2';

export const EventFieldLiked = props => {

    

    const user = JSON.parse(localStorage.getItem('userData'))
    const isUser = !!user;

    const mySwal = () => {

        swal.fire({
          title: 'Event deleted successfully',
          icon: 'success',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })
    
      }

      const mySwalError = (error) => {

        swal.fire({
            title: 'Oops Something went wrong!',
            icon: 'error',
            text: error,
          })
    
      }

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
                mySwalError('Some error occured getting your Events liked')
                console.log(e);
            });
    }



    const deleteEventUser = (id) => {

        EventUserService.remove(id).then(response => {
            console.log(response.data);
            mySwal();
        })
            .catch(e => {
                console.log(e);
                mySwalError('Some error occured removing your event')
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