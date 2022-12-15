import { DownMenu } from '../../components/DownMenu/DownMenu'
import Navbar from '../../components/Sidebar/Navbar'
import './Favourite.css'
import { useState, useEffect } from "react";
import EventUserService from '../../Services/EventUserService';
import EventService from '../../Services/EventService';
import { EventField } from '../../components/EventField/EventField';
import { EventFieldLiked } from '../../components/EventFieldLiked/EventFieldLiked';

export const Favourite = () => {


    // const isUser = !!user;

    // const [eventUsers, setEventusers] = useState([]);
    const [event, setEvent] = useState([]);

    const getEventUsers = () => {
        const user = JSON.parse(localStorage.getItem('userData'))
        console.log("user", user)
        EventUserService.getAll().then(response => {
            console.log("response.data", response.data)
            let events = [];
            for (let i = 0; i < response.data.length; i++) {
                if (user.id == response.data[i].user_id) {
                    events.push(response.data[i].event_id)
                }
            }
            console.log(events)
            getEvent(events);
        })
            .catch(e => {
                console.log(e);
            });
    }


    const getEvent = (events) => {
        for (let i = 0; i < events.length; i++) {
            EventService.get(events[i]).then(response => {
                console.log("events dentro", response.data);
                console.log("events usestate", event)
                // console.log("count", Arrayevent.length)
                setEvent(e => [...e, response.data]);
            }).catch(e => {
                console.log(e);
            });
        }
    }

    useEffect(() => {
        console.log("hola holita")
        getEventUsers();
    }, []);


    return (
        <>
            <Navbar></Navbar>

            <div className="event-type-card-sos">
                {event.map((eventa, index) => <EventFieldLiked key={index} event={eventa} ></EventFieldLiked>)}
            </div>

            <DownMenu></DownMenu>

        </>
    )

}