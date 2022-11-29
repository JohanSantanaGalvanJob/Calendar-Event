import './Add.css'
import { DownMenu } from "../../components/DownMenu/DownMenu"
import { UpMenu } from "../../components/UpMenu/UpMenu"
import { Link } from 'react-router-dom'

export const Add = () => {
    return (
        <>
            <UpMenu></UpMenu>
            <div className='cards'>
                <div className='add-field'>
                    <Link to='/AddEventType'>
                        <div className='add-field-content'>
                            <h4 className='add-field-title'>Event Type</h4>
                            <div className="add-field-line"></div>
                            <p>Acceder a los Event Type</p>
                        </div>
                    </Link>
                </div>

                <div className='add-field'>
                    <div className='add-field-content'>
                        <h4 className='add-field-title'>Location</h4>
                        <div className="add-field-line"></div>
                        <p>Acceder a las location</p>
                    </div>
                </div>

                <div className='add-field'>
                    <div className='add-field-content'>
                        <h4 className='add-field-title'>Event</h4>
                        <div className="add-field-line"></div>
                        <p>Acceder a los eventos</p>
                    </div>
                </div>

                <div className='add-field'>
                    <div className='add-field-content'>
                        <h4 className='add-field-title'>Users</h4>
                        <div className="add-field-line"></div>
                        <p>Acceder a los usuarios</p>
                    </div>
                </div>
            </div>
            <DownMenu></DownMenu>
        </>
    )
}