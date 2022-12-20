import { DownMenu } from "../../components/DownMenu/DownMenu"
import { useState, useEffect } from 'react';
import EventService from "../../Services/EventService";
import Navbar from "../../components/Sidebar/Navbar";
import * as AiIcons from "react-icons/ai";
import { EventField } from "../../components/EventField/EventField";
export const SearchPage = () => {

    const [events, setEvents] = useState([]);
  const [currentIndex] = useState(-1);
  const [searchEventName, setSearchEventName] = useState("");

  useEffect(() => {
    retrieveEvents();
  }, []);

  const onChangeSearchEventName = e => {
    const searchEventName = e.target.value;
    setSearchEventName(searchEventName);
  };

  const retrieveEvents = () => {
    EventService.getAll()
      .then(response => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

    return (
        <>
        <Navbar></Navbar>
            <div className="sign-up-field">
            <input type='text' placeholder='Write here for search events' value={searchEventName} onChange={onChangeSearchEventName}></input>
            <i><AiIcons.AiOutlineSearch /></i>
            </div>

            {events &&
                events.filter(event => event.title.toLowerCase().search(searchEventName.toLowerCase()) !== -1).map((event, index) => 
                <div className="event-card-part">
                <EventField key={event.id} event={event} ></EventField>
                 <div className="event-line"></div>
                 </div>
                )}
        <DownMenu></DownMenu>
        </>
    )
}