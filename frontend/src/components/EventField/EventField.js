import EventUserService from '../../Services/EventUserService';
import './EventField.css';
import { useState, useEffect } from "react";
import swal from 'sweetalert2';


export const EventField = props => {


    const initialEventUserState = {
        id: null,
        user_id:null,
        event_id:null,
    };
    

    const user = JSON.parse(localStorage.getItem('userData'))
    const isUser = !!user;
    const [eventUser, setEventUser] = useState(initialEventUserState);

    const mySwal = () => {

        swal.fire({
          title: 'Event Added to your Favs',
          icon: 'success',
        })
    
      }

      const mySwalError = (error) => {

        swal.fire({
            title: 'Oops Something went wrong!',
            icon: 'error',
            text: error,
          })
    
      }

    const saveEventUser = () => {
        var data = {
            user_id:user.id,
            event_id:props.event.id,
        };

        EventUserService.create(data).then(response => {

            setEventUser({
                id: response.data.id,
                user_id:response.data.user_id,
                event_id:response.data.event_id,
            });
            console.log(response.data);
            mySwal();
        })
            .catch(e => {
                console.log(e);
                mySwalError("Some error occured adding the event to fav")
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
                            <img src='./icons/MenuAbajo/estrella.png' onClick={saveEventUser}></img>
                        </div>
                    ) : null
                    }
                </div>
            </div>

        </>
    )
}