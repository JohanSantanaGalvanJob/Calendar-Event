import { DownMenu } from "../../components/DownMenu/DownMenu"
import { UpMenu } from "../../components/UpMenu/UpMenu"
import { EventField } from "../../components/EventField/EventField"

import './Event.css';
import { Sidebar } from "react-pro-sidebar";
import Navbar from "../../components/Sidebar/Navbar";


export const Event = () => {
    return (
        <>

            <Navbar></Navbar>
            <div className="event-fields-container">
                <EventField></EventField>
                
            </div>


            <DownMenu></DownMenu>

        </>
    )
}