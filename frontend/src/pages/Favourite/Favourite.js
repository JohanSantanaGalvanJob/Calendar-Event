import { DownMenu } from '../../components/DownMenu/DownMenu'
import Navbar from '../../components/Sidebar/Navbar'
import './Favourite.css'
import { useState, useEffect } from "react";
import EventUserService from '../../Services/EventUserService';
import EventService from '../../Services/EventService';
import { EventFieldLiked } from '../../components/EventFieldLiked/EventFieldLiked';
import * as idb from "idb";

export const Favourite = () => {

    const [event, setEvent] = useState([]);
    const [localFavourites, setLocalFavourites] = useState([]);
    const user = JSON.parse(localStorage.getItem('userData'))
    let events = [];






    useEffect(() => {

        async function getEventsUsersFromIndexedDB() {
            const db = await idb.openDB('favourites-db', 1); // Open the database
            const tx = db.transaction('events-users', 'readonly'); // Start a transaction to read from the 'events' object store
            const store = tx.objectStore('events-users');
            const events = await store.getAll(); // Retrieve all events from the store
            setLocalFavourites(events);
        }

        getEventsUsersFromIndexedDB();

        EventUserService.getAll().then(response => {
            console.log("response.data", response.data)
            for (let i = 0; i < response.data.length; i++) {
                if (user.id === response.data[i].user_id) {
                    events.push(response.data[i].event_id)
                }
            }

            const dbPromiseEventUser = idb.openDB("favourites-db", 1, {
                upgrade(upgradeDB) {
                    upgradeDB.createObjectStore("events-users");
                }

            });

            dbPromiseEventUser.then(async db => {
                for (let i = 0; i < events.length; i++) {
                    EventService.get(events[i]).then(async response => {
                        const eventsStore = db.transaction("events-users", 'readwrite').objectStore("events-users");
                        console.log(response.data);
                        await eventsStore.put(response.data,response.data.id);
                    }).catch(e => {
                        console.log(e);
                    });
                }
            });


        }).catch(e => {
            console.log(e);
        });





        

        // getEventUsers();
    }, []);


    return (
        <>
            <Navbar></Navbar>

            <div className="event-type-card-sos">
                {localFavourites.map((eventa, index) => <EventFieldLiked key={index} event={eventa} ></EventFieldLiked>)}
            </div>

            <DownMenu></DownMenu>

        </>
    )

}