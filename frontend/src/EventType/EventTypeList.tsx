import { useState, useEffect } from "react"
import { EventType } from "./EventType"
import { EventTypeForm } from '../EventType/EventTypeForm'
import { IEventType } from "../types/eventTypeData"
import axios from 'axios';

export const EventTypeList = () => {
  const [EventTypes, setEventTypes] = useState<IEventType[]>([])
  const [isUpdate, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    getEventTypes()
    setUpdate(false)
  }, [isUpdate])

  const getEventTypes = async () => {
    try {
      const response = await axios
        .get('http://localhost:3000/event_types')

      const data = response.data

      setEventTypes(data.reverse())

    } catch(error: any) {
      console.log(error)
    }
  }

  const updateEventTypeList = (eventType: IEventType) => {
    let _eventTypes = EventTypes;
    _eventTypes.unshift(eventType);
    setEventTypes(_eventTypes);

    setUpdate(true)
  }

  const dataChanged = () => {
    getEventTypes();
    setUpdate(false);
  }
  
  return (
    <>
      <EventTypeForm updateEventTypeList={updateEventTypeList} dataChanged={dataChanged}/>
      
      <h1>Post List</h1>
      {EventTypes.map((post: IEventType) => (
        <EventType
          key={post.id} 
          name={post.name}
        />
      ))}
    </>
  )
}