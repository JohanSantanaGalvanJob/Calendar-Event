

import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { DownMenu } from '../../components/DownMenu/DownMenu';
import EventService from "../../Services/EventService"
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import LocationService from '../../Services/LocationService';
import EventTypeService from '../../Services/EventTypeService';

export const UpdateEvent = () => {
    const [imgSrc, setImgSrc] = useState(("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"));
    const [currentEvent, setCurrentEvent] = useState({});
    const [locations, setLocations] = useState([]);
    const [eventTypes, setEventTypes] = useState([]);
    const navigate = useNavigate();
    let { id } = useParams();


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentEvent({ ...currentEvent, [name]: value });
    };

    const handleInputFileChange = event => {

        var file = event.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setImgSrc(reader.result);
        };

        console.log(url) // Would see a path?

        setCurrentEvent({ ...currentEvent, image: file });
    };

    useEffect(() => {
        getEventTypes();
        getLocations();
        EventService.get(id).then((response) => {
            setCurrentEvent(response.data)
            setImgSrc(response.data.image)
        }).catch()
    }, [])

    // const updateUser = () => {
    //     UserService.update(currentUser.id, currentUser)
    //         .then(response => {
    //             //props.updateList();
    //             // props.updateOne(response.data);
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    const getEventTypes = () => {
        EventTypeService.getAll().then(response => {
            setEventTypes(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    }

    const getLocations = () => {
        LocationService.getAll().then(response => {
            setLocations(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    }

    const updatePublished = event => {
        event.preventDefault()
        var data = {
            title: event.target.title.value,
            description: event.target.description.value,
            date: event.target.date.value,
            starting_hour: event.target.starting_hour.value,
            finished_hour: event.target.finished_hour.value,
            url: event.target.url.value,
            location_id: event.target.location_id.value,
            event_type_id: event.target.event_type_id.value,
            image: event.target.image.files[0]

        };

        EventService.update(currentEvent.id, data)
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });



        navigate('/AddEvent')

    };



    return (
        <>

            <h2 className='edit-profile-title'>Update Event</h2>


            <form onSubmit={updatePublished}>
                <div className='edit-profile-container'>

                    <div className='edit-profile-image-container'>
                        <div className="d-flex justify-content-center mb-4">
                            <Image rounded src={currentEvent.image = imgSrc}

                                style={{ width: "136px", height: "185px" }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-primary btn-rounded">
                                <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                                <input name='image' type="file" className="form-control d-none" id="customFile2" required onChange={handleInputFileChange} />
                            </div>
                        </div>
                    </div>
                    <div className='edit-profile-input'>
                        <input id='title' name='title' value={currentEvent.title} onChange={handleInputChange} minLength={5} maxLength={30} pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" required type='text' placeholder='Write the title' />
                        <textarea id='description' name='description' value={currentEvent.description} onChange={handleInputChange} minLength={20} maxLength={1000} type='text' placeholder='Write the description' required={true}></textarea>
                        <input id='date' name='date' value={currentEvent.date} onChange={handleInputChange} type="date" placeholder='Write your date of birth' required={true}></input>
                        <input id='starting_hour' name='starting_hour' value={currentEvent.starting_hour} onChange={handleInputChange} type="time" placeholder='Write the hour it starts' required={true}></input>
                        <input id='finished_hour' name='finished_hour' value={currentEvent.finished_hour} onChange={handleInputChange} type="time" placeholder='Write the hour it ends' required={true}></input>
                        <input id='url' name='url' value={currentEvent.url} onChange={handleInputChange} type="url" pattern="https://.*" placeholder='Write the url' required={true}></input>
                    </div>

                    <div className='edit-profile-input'>

                        <select className='edit-profile-select' name="event_type_id" onChange={handleInputChange}>
                            {eventTypes.map((eventType, index) =>
                                <>
                                    <option value={eventType.id}  >{eventType.name}</option>
                                </>
                            )}
                        </select>

                        <select className='edit-profile-select' name="location_id" onChange={handleInputChange}>
                            {locations.map((location, index) =>
                                <>
                                    <option value={location.id}>{location.name}</option>
                                </>
                            )}
                        </select>
                    </div>
                    <button type='submit' className="edit-profile-button">Edit</button>
                </div>
            </form>

            <DownMenu></DownMenu>
        </>
    )
}