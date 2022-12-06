import { DownMenu } from "../../components/DownMenu/DownMenu"
import { UpMenu } from "../../components/UpMenu/UpMenu"
import { EventField } from "../../components/EventField/EventField"

import './Event.css';


export const Event = () => {
    return (
        <>

            <UpMenu></UpMenu>
            <div className="event-fields-container">
                <EventField></EventField>
            </div>


            <DownMenu></DownMenu>

        </>
    )
}