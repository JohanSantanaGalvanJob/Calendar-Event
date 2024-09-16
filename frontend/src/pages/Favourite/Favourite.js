import { DownMenu } from '../../components/DownMenu/DownMenu'
import Navbar from '../../components/Sidebar/Navbar'
import './Favourite.css'
import { useState, useEffect } from "react";
import EventUserService from '../../Services/EventUserService';
import EventService from '../../Services/EventService';
import { EventFieldLiked } from '../../components/EventFieldLiked/EventFieldLiked';
import * as idb from "idb";

export const Favourite = () => {

    const [localFavourites, setLocalFavourites] = useState([]);
    const [props, setProps] = useState([]);
    const user = JSON.parse(localStorage.getItem('userData'));
    let events = [];

    // const pendingDBLocal = () => {
    //     const dbPromiseEventUser = idb.openDB("pending-favourites-db", 1, {

    //         upgrade(upgradeDB) {
    //             upgradeDB.createObjectStore("events-users");
    //             console.log('holaaaaaaa');
    //         }

    //     })
    // }

    // const favouritesDBLocal = () => {
    //     const dbPromiseEventUser = idb.openDB("event-users-db", 1, {

    //         upgrade(upgradeDB) {
    //             upgradeDB.createObjectStore("events-users");
    //             console.log('holaaaaaaa');
    //         }

    //     })
    // }

    const eventUserDBLocal = () => {
        const dbPromiseEventUser = idb.openDB("favourites-db", 1, {

            upgrade(upgradeDB) {
                upgradeDB.createObjectStore("events-users");
                console.log('holaaaaaaa');
            }

        }).then(async db => {
            EventUserService.getByUser(user.id).then(async response => {



                // console.log(response.data)

                for (let index = 0; index < response.data.length; index++) {
                    const eventsStore = db.transaction("events-users", 'readwrite').objectStore("events-users");
                    await eventsStore.put(response.data[index].events, response.data[index].events.id);
                    setLocalFavourites(e => [...e, response.data[index]]);
                }


               
                // for (let i = 0; i < events.length; i++) {
                //     EventService.get(events[i]).then(async response => {
                //         const eventsStore = db.transaction("events-users", 'readwrite').objectStore("events-users");
                //         setLocalFavourites(e => [...e, response.data]);
                //         await eventsStore.put(response.data, response.data.id);
                //     }).catch(e => {
                //         console.log(e);
                //         getEventsUsersFromIndexedDB();
                //     });
                // }


            }).catch(e => {
                console.log(e);
                console.log('sooooooos')
                getEventsUsersFromIndexedDB();
            });


        });
    }


    async function getEventsUsersFromIndexedDB() {
        const db = await idb.openDB('favourites-db', 1); // Open the database
        const tx = db.transaction('events-users', 'readonly'); // Start a transaction to read from the 'events' object store
        const store = tx.objectStore('events-users');
        const eventsa = await store.getAll(); // Retrieve all events from the store
        setLocalFavourites(eventsa);
    }




    useEffect(() => {
        // let events = [];
        // async function getEventsUsersFromIndexedDB() {
        //     const db = await idb.openDB('favourites-db', 1); // Open the database
        //     const tx = db.transaction('events-users', 'readonly'); // Start a transaction to read from the 'events' object store
        //     const store = tx.objectStore('events-users');
        //     const eventsa = await store.getAll(); // Retrieve all events from the store
        //     setLocalFavourites(eventsa);
        //     const event = await store.get("id");
        //     events.push(event);
        // }

        // const dbPromiseEventUser = idb.openDB("favourites-db", 1, {

        //     upgrade(upgradeDB) {
        //         upgradeDB.createObjectStore("events-users");
        //         console.log('holaaaaaaa');
        //     }

        // });

        // dbPromiseEventUser.then(async db => {
        //     for (let i = 0; i < events.length; i++) {
        //         EventService.get(events[i]).then(async response => {
        //             console.log(response.data)
        //             const eventsStore = db.transaction("events-users", 'readwrite').objectStore("events-users");
        //             setLocalFavourites(e => [...e, response.data]);
        //             await eventsStore.put(response.data, response.data.id);
        //         }).catch(e => {
        //             console.log(e);

        //         });
        //     }
        // });

        // async function getEventsUsers(events) {

        //     for (let i = 0; i < events.length; i++) {
        //         console.log(events.value[i])
        //         EventService.get(events[i].value).then(async response => {
        //             setLocalFavourites(e => [...e, response.data])
        //         }).catch(e => {
        //             console.log(e);

        //         });
        //     }
        // }


        // EventUserService.getByUser(user.id).then(response => {
        //     console.log(response.data)
        //     events.push(response.data)
        //     console.log(events)
        //     getEventsUsers(events)
        //    }).catch(e => {
        //     console.log(e);

        //     getEventsUsersFromIndexedDB();
        // });

        eventUserDBLocal();
        // pendingDBLocal();
        // favouritesDBLocal();

    }, []);


    return (
        <>
        {console.log(localFavourites)}
            <Navbar></Navbar>

            <div className="event-type-card-sos">
                {/* {localFavourites.map((eventa, index) => <EventFieldLiked key={index} event={eventa}></EventFieldLiked>)} */}
                <EventFieldLiked event={localFavourites}></EventFieldLiked>
            </div>

            <DownMenu></DownMenu>

        </>
    )

}