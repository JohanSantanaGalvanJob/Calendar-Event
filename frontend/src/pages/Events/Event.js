import { DownMenu } from "../../components/DownMenu/DownMenu"
import { EventField } from "../../components/EventField/EventField"
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import './Event.css';
import Navbar from "../../components/Sidebar/Navbar";
import EventService from "../../Services/EventService";
import swal from 'sweetalert2';


export const Event = () => {

    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    
   

    const getEvents = () => {
        EventService.getAll().then(response => {
            setEvents(response.data);
            console.log(response.data);
        })
            .catch(e => {
                mySwalError("An error occured loading the events. Please try Again Later")
                console.log(e);
            });
    }

    const mySwalError = (error) => {

        swal.fire({
            title: 'Oops Something went wrong!',
            icon: 'error',
            text: error,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/')
            }
          })
    
      }

    useEffect(() => {
        getEvents();
    }, []);


    return (
        <>

            <Navbar></Navbar>
            <div className="event-type-card-sos">
                {events.map((event, index) => 
                <div className="event-card-part">
                <EventField key={event.id} event={event} ></EventField>
                 <div className="event-line"></div>
                 </div>
                )}
            </div>


            <DownMenu></DownMenu>

        </>
    )
}