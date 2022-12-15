import { DownMenu } from "../../components/DownMenu/DownMenu"
import { UpMenu } from "../../components/UpMenu/UpMenu"
import { EventField } from "../../components/EventField/EventField"
import { useState, useEffect } from "react";

import './Event.css';
import { Sidebar } from "react-pro-sidebar";
import Navbar from "../../components/Sidebar/Navbar";
import EventService from "../../Services/EventService";


export const Event = () => {

    const [events, setEvents] = useState([]);
   

    const getEventTypes = () => {
        EventService.getAll().then(response => {
            setEvents(response.data);
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {
        getEventTypes();
    }, []);


    return (
        <>

            <Navbar></Navbar>
            <div className="event-type-card-sos">
                {events.map((event, index) => <EventField key={event.id} event={event} ></EventField>)}
            </div>


            <DownMenu></DownMenu>

        </>
    )
}