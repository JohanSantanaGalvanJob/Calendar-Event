import './AddEvent.css'

import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import swal from 'sweetalert2';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useForm } from "react-hook-form";
import { DownMenu } from '../../components/DownMenu/DownMenu';
import EventService from '../../Services/EventService';
import Navbar from '../../components/Sidebar/Navbar';
import EventTypeService from '../../Services/EventTypeService';
import LocationService from '../../Services/LocationService';
import EventCard from '../../components/EventCard/EventCard';

export const AddEvent = () => {

    const user = JSON.parse(localStorage.getItem('userData'))

    const initialEventState = {
        id: null,
        title: "",
        description: "",
        starting_hour: "",
        finished_hour: "",
        date: undefined,
        url: "",
        location_id: "",
        event_type_id: "",
        image: ""
    };


    const [imgSrc, setImgSrc] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg");
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [locations, setLocations] = useState([]);
    const [eventTypes, setEventTypes] = useState([]);
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState(initialEventState);


    const getEventTypes = () => {
        EventTypeService.getAll().then(response => {
            setEventTypes(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    }

    const getEvents = () => {
        EventService.getAll().then(response => {
            setEvents(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    }

    const singleUpdateList = (index) => (et) => {
        const ets = [...events];
        ets[index] = et;
        setEvents(ets);
    };

    const singleDeleteList = (index) => () => {
        const ets = [...events];
        ets.splice(index, 1)
        setEvents(ets);
    };

    const getLocations = () => {
        LocationService.getAll().then(response => {
            setLocations(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    }

    const mySwal = () => {

        swal.fire({
            title: 'Event created Correctly!',
            icon: 'success',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        })

    }

    const onSubmit = (event) => {
        // saveevent()

        event.preventDefault();

        const params = {
            title: event.target.title.value,
            description: event.target.description.value,
            date: event.target.date.value,
            starting_hour: event.target.starting_hour.value,
            finished_hour: event.target.finished_hour.value,
            url: event.target.url.value,
            location_id: event.target.location_id.value,
            event_type_id: event.target.event_type_id.value,
            image: event.target.image.files[0]
        }

        EventService.create(params).then((response) => {
            console.log(response.data);
            setEvent(response.data)
            mySwal();
        }).catch((e) => {
            console.log(e)
        });
    }





    const handleInputChange = event => {
        const { name, value } = event.target;
        setEvent({ ...event, [name]: value });
    };

    const handleInputFileChange = event => {

        var file = event.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setImgSrc(reader.result);
        };

        setEvent({ ...event, image: file });
    };

    useEffect(() => {
        getEventTypes();
        getLocations();
        getEvents();
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <Container className='container'>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="sign-up-style">
                            <div>
                            </div>
                            <div>
                                <h2 className="sign-up-title">Events</h2>

                                <form onSubmit={onSubmit}>

                                    <div>
                                        <div className="d-flex justify-content-center mb-4">
                                            <Image rounded src={imgSrc}

                                                style={{ width: "136px", height: "185px" }} />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div className="btn btn-primary btn-rounded">
                                                <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                                                <input name='image' type="file" className="form-control d-none" id="customFile2" required onChange={handleInputFileChange} />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='sign-up-form'>
                                        <div className='sign-up-field'>
                                            <input id='title' name='title' value={event.title} minLength={5} maxLength={30} pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" onChange={handleInputChange} required type='text' placeholder='Write the title' />
                                        </div>

                                        <div className='sign-up-field'>
                                            <textarea id='description' name='description' value={event.description} minLength={20} maxLength={1000} onChange={handleInputChange} type='text' placeholder='Write the description' required={true}>
                                            </textarea>
                                        </div>

                                        <div className='sign-up-field'>
                                            <input id='date' name='date' value={event.date} onChange={handleInputChange} type="date" placeholder='Write your date of birth' required={true}></input>
                                        </div>

                                        <div className='sign-up-field'>
                                            <input id='starting_hour' name='starting_hour' value={event.starting_hour} onChange={handleInputChange} type="time" placeholder='Write the hour it starts' required={true}></input>
                                        </div>

                                        <div className='sign-up-field'>
                                            <input id='finished_hour' name='finished_hour' value={event.finished_hour} onChange={handleInputChange} type="time" placeholder='Write the hour it ends' required={true}></input>
                                        </div>

                                        <div className='sign-up-field'>
                                            <input id='url' name='url' value={event.url} onChange={handleInputChange} type="url" placeholder='Write the url' pattern="https://.*" required={true}></input>
                                        </div>

                                        <select className='sign-up-select' name="event_type_id" onChange={handleInputChange}>
                                            <option selected='selected'>Select Event Type</option>
                                            {eventTypes.map((eventType, index) =>
                                                <>
                                                    <option value={eventType.id}  >{eventType.name}</option>
                                                </>
                                            )}
                                        </select>

                                        <select className='sign-up-select' name="location_id" onChange={handleInputChange}>
                                            <option selected='selected'>Select Location</option>
                                            {locations.map((location, index) =>
                                                <>
                                                    <option value={location.id}>{location.name}</option>
                                                </>
                                            )}
                                        </select>

                                        <button type='submit' className="sign-up-button">Create Event</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            <div className="event-type-card-sos">
                {events.map((event, index) => <EventCard key={event.id} event={event} updateOne={singleUpdateList(index)} deleteOne={singleDeleteList(index)} ></EventCard>)}
            </div>
            <DownMenu></DownMenu>
        </>
    )
}