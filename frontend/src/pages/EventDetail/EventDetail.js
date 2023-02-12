
import Navbar from "../../components/Sidebar/Navbar";
import EventService from "../../Services/EventService";
import swal from 'sweetalert2';
import './EventDetail.css'
import { DownMenu } from "../../components/DownMenu/DownMenu"
import { EventField } from "../../components/EventField/EventField"
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import LocationService from "../../Services/LocationService";
import { BackButton } from "../../components/BackButton/BackButton/BackButton";
import { handleBreakpoints } from "@mui/system";


export const EventDetail = () => {

    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const [width, setWidth] = useState(0)
    let { id } = useParams();
    let { name } = useParams();

    const mySwalError = (error) => {

        swal.fire({
            title: 'Oops Something went wrong!',
            icon: 'error',
            text: error,
        })

    }

    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        LocationService.get(events.location_id).then(response => {
            setLocations(response.data);
            console.log(response.data);
        })
            .catch(e => {
                mySwalError('Locations: ' + e)
                console.log(e);
            });
    }

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth]);

    useEffect(() => {
        EventService.get(id).then((response) => {
            setEvents(response.data)
        }).catch(e => {
            mySwalError("An error occured loading the event. Please try Again Later")
            console.log(e);
        });

        LocationService.get(name).then(response2 => {
            setLocations(response2.data);
            console.log(response2.data);
        }).catch(e => {
            mySwalError("An error occured loading the location. Please try Again Later")
            console.log(e);
        });


    }, []);

    return (
        <>
            <style>{'body { background-color: #CCF2F4;}'}</style>
            <Navbar></Navbar>
            <div className="event-detail-back-button">
                <BackButton />
            </div>
            <div className="event-detail-first-part">
                <h1>{events.title}</h1>
                <div className="event-detail-line"></div>
                <p>{events.description}</p>
            </div>
            <div className="event-detail-second-part">
                <h3>Localización</h3>
                <div className="event-detail-line"></div>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width={width-50} height="500" id="gmap_canvas" src={"https://maps.google.com/maps?q=" + locations.name + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="event-detail-second-part">
                <h3>Fecha y Horas</h3>
                <div className="event-detail-line"></div>
                <p>
                    Fecha: {events.date}<br />
                    Hora de entrada: {events.starting_hour}<br />
                    Hora de finalización: {events.finished_hour}<br />
                </p>
            </div>
            <div className="event-detail-second-part">
                <h3>Web</h3>
                <div className="event-detail-line"></div>
                <a href={events.url}>Haz Click Aquí</a>
            </div>

            <div className="empty-space"></div>
            <DownMenu></DownMenu>

        </>
    )
}