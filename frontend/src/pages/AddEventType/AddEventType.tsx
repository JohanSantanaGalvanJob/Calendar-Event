import { Button, IconButton } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { DownMenu } from "../../components/DownMenu/DownMenu";
import './AddEventType.css'
import { EventTypeCard } from "../../components/EventTypeCard/EventTypeCard";
import axios from "axios";
import React, { useState } from "react";
import { IEventType } from "../../types/eventTypeData";



export const AddEventType = () => {

    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    const baseURL = 'http://localhost:3000/event_types'
    const [name, setName] = useState('')

      const createEventType = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post(baseURL,{name}).then((response) => {
            setName(response.data);
        });
      }

    return (
        <>
            <Container className='container'>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="event-type-style">
                            <h2 className="event-type-title">Add Event Type</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className='event-type-field'>
                                    <input type="text" value={name} placeholder='Write your new Event Type' onChange={(e) => setName(e.target.value) } required></input>
                                </div>

                                <button type="submit" className="event-type-button" onClick={createEventType}>Create</button>
                            </form>
                            <h2 className="event-type-title">Event Type List</h2>


                        </div>

                    </Col>
                </Row>
            </Container>
           <EventTypeCard></EventTypeCard>
            <DownMenu></DownMenu>
        </>
    )
}