
import './Settings.css'
import { SettingsData } from './SettingsData'
import { Link } from 'react-router-dom'
import { UpMenu } from '../../components/UpMenu/UpMenu'
import { DownMenu } from '../../components/DownMenu/DownMenu'

const Settings = () => {


    return (
        <>
        <UpMenu></UpMenu>
            <div>
                <h1 className='settings-title'>Settings</h1>
                {SettingsData.map((item, index) => {
                    return (
                        <Link to={item.path}>
                            <div className="settings-field">

                                <div>
                                    {item.icon}
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>{item.title}</h2>
                                    <p className="settings-text">{item.description}</p>
                                    <div className="settings-line"></div>
                                </div>

                            </div>
                        </Link>
                    )
                })}


            </div>
            <DownMenu></DownMenu>


        </>
    )
}

export default Settings


