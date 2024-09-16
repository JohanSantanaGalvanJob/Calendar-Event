import { DownMenu } from "../../components/DownMenu/DownMenu"
import { EventField } from "../../components/EventField/EventField"
import { useState, useEffect } from "react";
import * as idb from "idb";


import './Event.css';
import Navbar from "../../components/Sidebar/Navbar";
import EventService from "../../Services/EventService";
import { Carrousel } from "../../components/Carrousel/Carrousel";

export const Event = () => {

  const [localEvents, setLocalEvents] = useState([]);
  // const [events, setEvents] = useState([]);

  useEffect(() => {
    const dbPromise = idb.openDB("events-db", 1, {
      upgrade(upgradeDB) {
        upgradeDB.createObjectStore("events");
      }
    });

    async function getEventsFromIndexedDB() {
      const db = await idb.openDB('events-db', 1); // Open the database
      const tx = (await db).transaction('events', 'readonly'); // Start a transaction to read from the 'events' object store
      const store = tx.objectStore('events');
      const events = await store.getAll(); // Retrieve all events from the store
      setLocalEvents(events);
      await tx.done;
    }
    

    dbPromise.then(async db => {
      EventService.getAll()
        .then(async response => {
          const eventsStore = db.transaction("events", 'readwrite').objectStore("events");
          let val = (await eventsStore.get('counter')) || 0;
          console.log(response.data)
          await response.data.forEach(event => eventsStore.put(event,event.id));
          await eventsStore.done;
          setLocalEvents(response.data);
        }).catch(error => {
          console.log(error)
          getEventsFromIndexedDB();
        });
    });
  }, []);


  // const getEvents = () => {
  //     EventService.getAll().then(response => {
  //         setEvents(response.data);
  //         console.log(response.data);
  //     })
  //         .catch(e => {
  //             setEvents(localEvents)
  //         });
  // }

  // const mySwalError = (error) => {

  //     swal.fire({
  //         title: 'Oops Something went wrong!',
  //         icon: 'error',
  //         text: error,
  //     }).then((result) => {
  //         if (result.isConfirmed) {
  //             navigate('/')
  //         }
  //     })

  // }

  // useEffect(() => {
  //     getEvents();
  // }, []);


  return (
    <>
    {console.log(localEvents)}
      <Navbar></Navbar>
      <div className="event-type-card-sos">
        <Carrousel></Carrousel>
       
          <div className="event-card-part">
            <EventField event={localEvents} ></EventField>
            <div className="event-line"></div>
          </div>
        
      </div>


      <DownMenu></DownMenu>

    </>
  )
}