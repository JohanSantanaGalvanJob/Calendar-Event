import EventUserService from '../../Services/EventUserService';
import './EventField.css';
import { useState, useEffect } from "react";
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import * as idb from "idb";
import EventService from '../../Services/EventService';

const array = [];


export const EventField = props => {

    const [xd, setXd] = useState([]);
    const [connection, setConnection] = useState(true);
    const [arrayCreate, setArrayCreate] = useState(JSON.parse(localStorage.getItem("ArrayToCreate")) || []);

    const checkServerConnection = async () => {
        try {
            const response = await EventService.getAll();
            if (response.status === 200) {
                console.log('conexion')
                setConnection(true)
            } else {
                setConnection(false)
            }

        } catch (error) {
            console.log('no conexion')
            setConnection(false)
        }
    };

    useEffect(() => {
        setXd(props.event)
    }, [props.event]);

    useEffect(() => {
        checkServerConnection()
        console.log(arrayCreate.length)
        if (connection && arrayCreate.length > 0) {
            for (let a = 0; a < arrayCreate.length; a++) {
                let data = {
                    user_id: user.id,
                    event_id: arrayCreate[a].id,
                }

                EventUserService.create(data)
            }
            localStorage.removeItem("ArrayToCreate")
            setArrayCreate([])
        }
    }, []);


    const initialEventUserState = {
        id: null,
        user_id: null,
        event_id: null,
    };

    // async function addEventsUsersFromIndexedDB(content) {
    //     const db = await idb.openDB('favourites-db', 1); // Open the database
    //     const tx = db.transaction('events-users', 'readwrite'); // Start a transaction to read from the 'events' object store
    //     const store = tx.objectStore('events-users');
    //     const eventsa = await store.add(content); // Retrieve all events from the store
    // }


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

    const saveEventUser = (content) => {
        var data = {
            user_id: user.id,
            event_id: content.id,
        };

        EventUserService.create(data).then(async response => {
            setConnection(true)
            setEventUser({
                id: response.data.id,
                user_id: response.data.user_id,
                event_id: response.data.event_id,
            });
            const db = await idb.openDB('favourites-db', 1); // Open the database
            const tx = db.transaction('events-users', 'readwrite'); // Start a transaction to read from the 'events' object store
            const store = tx.objectStore('events-users');
            await store.add(content, content.id); // Retrieve all events from the store
            console.log(response.data);
            mySwal();
        })
            .catch(async e => {
                setConnection(false)
                const db = await idb.openDB('favourites-db', 1); // Open the database
                const tx = db.transaction('events-users', 'readwrite'); // Start a transaction to read from the 'events' object store
                const store = tx.objectStore('events-users');
                
                await store.add(content, content.id); // Retrieve all events from the store
                array.push(content)
                
                console.log(e);
                localStorage.setItem("ArrayToCreate", JSON.stringify(array))
                mySwalError("Some error occured adding the event to fav")
            });



    };

    let eventDetailUrl = `/EventDetail/${props.event.id}/${props.event.location_id}`;

    return (
        <>
            {connection}
            {console.log(xd)}
            {xd.length === 0 || !xd ?
                null :
                Array.from(xd).map((eventa, index) => {

                    return (

                        <div id='event-field' className='event-field'>
                            <div>
                                <Link to={eventDetailUrl}>
                                    <img className='event-field-img' src={eventa.image} alt='eventImage'></img>
                                </Link>
                            </div>
                            <div id='event-field-content' className='event-field-content'>
                                <h4 className='event-field-title'>{eventa.title}</h4>
                                <div className="event-field-line"></div>
                                <p>{eventa.description}</p>
                                {isUser ? (
                                    <div className='event-field-icon'>
                                        <img src='./icons/MenuAbajo/estrella.png' onClick={() => saveEventUser(eventa)} alt='favouriteImage'></img>
                                    </div>
                                ) : null
                                }
                            </div>
                        </div>

                    )
                })}

        </>
    )
}