import { Button, IconButton } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from "react-hook-form";
import { DownMenu } from "../../components/DownMenu/DownMenu";
import './AddLocation.css'
import {LocationCard} from '../../components/LocationCard/LocationCard'
import { useState, useEffect } from "react";
import LocationService from "../../Services/LocationService"


const AddLocation = () => {
    const initialLocationState = {
        id: null,
        name: ""
    };

    const [locations, setLocations] = useState([]);

    const [location, setLocation] = useState(initialLocationState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setLocation({ ...location, [name]: value });
    };

    const singleUpdateList = (index) => (et) => {
        const ets = [...locations];
        ets[index] = et;
        setLocations(ets);
    };

    const saveLocation = () => {
        var data = {
            name: location.name
        };

        LocationService.create(data).then(response => {
            setLocation({
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

    const getLocations = ()  =>{
        LocationService.getAll().then(response => {
            setLocations(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    useEffect(() => {
        getLocations();
      }, []);

    return (
        <>
            <Container className='container'>
                <Row className="justify-content-center">
                    <Col xs={8} md={6}>
                        <div className="location-style">
                            { submitted ? (
                                <div>
                                 
                                </div>
                            ) : (
                                <div>
                                    <h2 className="location-title">Add Location</h2>
                                    <form>

                                        <div className='location-field'>
                                            <input minLength={5} maxLength={30} id='name' name="name" type="text" value={location.name} placeholder='Write your new Location' onChange={handleInputChange} required></input>
                                        </div>

                                        <button type="submit" className="location-button" onClick={saveLocation}>Create</button>
                                    </form>
                                    <h2 className="location-title">Location List</h2>
                                </div>
                            )}
                        </div>

                    </Col>
                </Row>
            </Container>

            {locations.map((location, index) => <LocationCard key={location.id} location={location} updateList={getLocations} updateOne={singleUpdateList(index)}></LocationCard> )}
            
            <DownMenu></DownMenu>
        </>
    )

}

export default AddLocation;