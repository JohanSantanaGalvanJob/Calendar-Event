import EventUserService from '../../Services/EventUserService';
import './EventFieldLiked.css';
import { useState, useEffect } from "react";
import swal from 'sweetalert2';
import * as idb from "idb";

const array = [];

export const EventFieldLiked = props => {

    const user = JSON.parse(localStorage.getItem('userData'))
    const [xd, setXd] = useState([]);
    const isUser = !!user;
    const [connection, setConnection] = useState(true);
    const [arrayDelete, setArrayDelete] = useState(JSON.parse(localStorage.getItem("ArrayToDelete")) || []);

    useEffect(() => {
        setXd(props.event)
    },[props.event]);

    useEffect(() => {
        checkServerConnection()
        console.log(arrayDelete.length)
        if (connection && arrayDelete.length > 0) {
            for (let a = 0; a < arrayDelete.length; a++) {
                EventUserService.remove(arrayDelete[a])
            }
            localStorage.removeItem("ArrayToDelete")
            setArrayDelete([])
        }
    },[]);

    const checkServerConnection = async () => {
        try {
            const response = await EventUserService.getAll();
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


    // Función para procesar la cola de operaciones pendientes
    // async function processDeleteQueue() {
    //   while (deleteQueue.length > 0) {
    //     const id = deleteQueue.shift();
    //     try {
    //       await EventUserService.remove(id);
    //     } catch (error) {
    //       console.error('Error removing event:', error);
    //       // Si se produce un error, agregue la operación a la cola de nuevo
    //       deleteQueue.unshift(id);
    //       // Salir del bucle para no procesar más operaciones en este momento
    //       break;
    //     }
    //   }
    // }

    // window.addEventListener('online', () => {
    //     console.log('Online again!');
    //     // Procese la cola de operaciones pendientes
    //     processDeleteQueue();
    //   });

    async function deleteEventsUsersFromIndexedDB(id) {
        const db = await idb.openDB('favourites-db', 1); // Open the database
        const tx = db.transaction('events-users', 'readwrite'); // Start a transaction to read from the 'events' object store
        const store = tx.objectStore('events-users');
        const eventsa = await store.delete(id); // Retrieve all events from the store
    }

    const mySwal = () => {

        swal.fire({
            title: 'Event deleted successfully',
            icon: 'success',
        }).then((result) => {
            // if (result.isConfirmed) {
            //     window.location.reload();
            // }
        })
    }

    const mySwalError = (error) => {

        swal.fire({
            title: 'Oops Something went wrong!',
            icon: 'error',
            text: error,
        })

    }

    // const getEventUsers = (eventa) => {
    //     // EventUserService.getByUser(user.id).then(response => {
    //     //     setConnection(true);
    //     //     console.log("response.data", response.data)
    //     //     for (let i = 0; i < response.data.length; i++) {
    //     //         if ((props.event.id == response.data[i].event_id)) {
    //     //             deleteEventUser(response.data[i].id)
    //     //             console.log(response.data[i].event_id)
    //     //             deleteEventsUsersFromIndexedDB(response.data[i].event_id)
    //     //         }
    //     //     }
    //     // })
    //     //     .catch(e => {
    //     //         setConnection(false);
    //     //         mySwalError('Some error occured getting your Events liked')
    //     //         console.log(props.event.id)
    //     //         deleteEventsUsersFromIndexedDB(props.event.id)
    //     //         array.push(props.event.id)
    //     //         //localStorage.setItem('eventsDeleted', props.event.id)



    //     //         console.log(e);
    //     //     });
    //     console.log(eventa)
    // }



    const deleteEventUser = (eventa) => {
        setXd(prevXd => prevXd.filter(ev => {
            return ev.id !== eventa.id
        }))

        EventUserService.remove(eventa.id).then(response => {
            setConnection(true);
            console.log(response.data);
            deleteEventsUsersFromIndexedDB(eventa.events.id)
            mySwal();
        })
            .catch(e => {
                console.log(e);
                setConnection(false);
                deleteEventsUsersFromIndexedDB(eventa.events.id)
                mySwalError('Some error occured removing your event')
                array.push(eventa.id)
                localStorage.setItem("ArrayToDelete",JSON.stringify(array))
                setArrayDelete(JSON.parse(localStorage.getItem("ArrayToDelete")))
            });

    };

    return (
        <>
            {connection}
            {console.log(typeof arrayDelete)}
            {console.log(arrayDelete)}
            {xd.length === 0 || !xd ?
                null :
                xd.map((eventa, index) => {
            
                    return (
                        <div index={index} className='event-field'>
                        <div>
                            <img className='event-field-img' src={eventa.events.image}></img>
                        </div>
                        <div className='event-field-content'>
                            <h4 className='event-field-title'>{eventa.events.title}</h4>
                            <div className="event-field-line"></div>
                            <p>{eventa.events.description}</p>
                            {isUser ? (
                                <div className='event-field-icon'>
                                    <img src='./icons/MenuAbajo/estrellanegro.png' onClick={() => deleteEventUser(eventa)}></img>
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