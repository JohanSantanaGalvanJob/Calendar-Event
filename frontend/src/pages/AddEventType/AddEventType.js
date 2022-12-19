import { Button, IconButton } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from "react-hook-form";
import { DownMenu } from "../../components/DownMenu/DownMenu";
import './AddEventType.css'
import { EventTypeCard } from '../../components/EventTypeCard/EventTypeCard'
import { useState, useEffect } from "react";
import EventTypeService from "../../Services/EventTypeService"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';



const AddEventType = () => {

    const mySwal = () => {

        swal.fire({
            title: 'Event Added Correctly!',
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
                saveEventType();
            }
          })

      }

      const mySwalError = (error) => {

        swal.fire({
            title: 'Oops Something went wrong!',
            icon: 'error',
            text: error,
          })

      }
    const initialEventTypeState = {
        id: null,
        name: ""
    };

    const [eventTypes, setEventTypes] = useState([]);

    const navigate = useNavigate();

    const [eventType, setEventType] = useState(initialEventTypeState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setEventType({ ...eventType, [name]: value });
    };

    const submit = () => {
       saveEventType()
    }

    const singleUpdateList = (index) => (et) => {
        const ets = [...eventTypes];
        ets[index] = et;
        setEventTypes(ets);
    };

    const singleDeleteList = (index) => () => {
        const ets = [...eventTypes];
        ets.splice(index,1)
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
            
            console.log(response.data);
        })
            .catch(e => {
                mySwalError(e)
                console.log(e);
            });

    };

    const getEventTypes = () => {
        EventTypeService.getAll().then(response => {
            setEventTypes(response.data);
            console.log(response.data);
        })
            .catch(e => {
                mySwalError(e)
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
                                <div>

                                </div>
                                <div>
                                    <h2 className="event-type-title">Add Event Type</h2>
                                    <form onSubmit={submit}>

                                        <div className='event-type-field'>
                                            <input minLength={5} maxLength={30} id='name' name="name" type="text" value={eventType.name} placeholder='Write your new Event Type' onChange={handleInputChange} pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" required></input>
                                        </div>

                                        <button type="submit" className="event-type-button">Create</button>
                                    </form>
                                    <h2 className="event-type-title">Event Type List</h2>
                                </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            <div className="event-type-card-sos">
                {eventTypes.map((eventType, index) => <EventTypeCard key={eventType.id} eventType={eventType} updateList={getEventTypes} updateOne={singleUpdateList(index)} deleteOne={singleDeleteList(index)} ></EventTypeCard>)}
            </div>
            <DownMenu></DownMenu>
        </>
    )

}

export default AddEventType;

