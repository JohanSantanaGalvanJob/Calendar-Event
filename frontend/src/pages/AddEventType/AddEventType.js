import { Button, IconButton } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from "react-hook-form";
import { DownMenu } from "../../components/DownMenu/DownMenu";
import './AddEventType.css'
import {EventTypeCard} from '../../components/EventTypeCard/EventTypeCard'
import { useState, useEffect } from "react";
import EventTypeService from "../../Services/EventTypeService"


const AddEventType = () => {
    const initialEventTypeState = {
        id: null,
        name: ""
    };

    const [eventTypes, setEventTypes] = useState([]);

    const [eventType, setEventType] = useState(initialEventTypeState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setEventType({ ...eventType, [name]: value });
    };

    const singleUpdateList = (index) => (et) => {
        const ets = [...eventTypes];
        ets[index] = et;
        setEventTypes(ets);
    };

    const saveEventType = () => {
        var data = {
            name: eventType.name
        };

        EventTypeService.create(data).then(response => {
            setEventType({
                id: response.data.id,
                name: response.data.name,
            });
            setSubmitted(true);
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });

    };

    const newEventType = () => {
        setEventType(initialEventTypeState);
        setSubmitted(false);
    };

    const getEventTypes = ()  =>{
        EventTypeService.getAll().then(response => {
            setEventTypes(response.data);
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
            <Container className='container'>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="event-type-style">
                            { submitted ? (
                                <div>
                                 
                                </div>
                            ) : (
                                <div>
                                    <h2 className="event-type-title">Add Event Type</h2>
                                    <form>

                                        <div className='event-type-field'>
                                            <input id='name' name="name" type="text" value={eventType.name} placeholder='Write your new Event Type' onChange={handleInputChange} required></input>
                                        </div>

                                        <button type="submit" className="event-type-button" onClick={saveEventType}>Create</button>
                                    </form>
                                    <h2 className="event-type-title">Event Type List</h2>
                                </div>
                            )}
                        </div>

                    </Col>
                </Row>
            </Container>

            {eventTypes.map((eventType, index) => <EventTypeCard key={eventType.id} eventType={eventType} updateList={getEventTypes} updateOne={singleUpdateList(index)}></EventTypeCard> )}
            
            <DownMenu></DownMenu>
        </>
    )

}

export default AddEventType;

