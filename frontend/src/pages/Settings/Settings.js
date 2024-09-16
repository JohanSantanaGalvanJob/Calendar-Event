
import './Settings.css'
import { Link, useNavigate } from 'react-router-dom'
import { UpMenu } from '../../components/UpMenu/UpMenu'
import { DownMenu } from '../../components/DownMenu/DownMenu'
import Navbar from '../../components/Sidebar/Navbar'
import DN from '../../components/DesktopNotification/DesktopNotification'

const Settings = () => {

    // this.desktopNotificationInstance = new DN();
    const user = JSON.parse(localStorage.getItem('userData'))
    const isUser = !!user;
    const navigate = useNavigate();

    const loadHelpSystem = () => {
        window.location.replace('https://localhost:443/helpSystem/Bienvenida.html');
    }

    // const handleClick = () => {
    //     this.desktopNotificationInstance.showNotification();
    // }

    return (
        <>
            <Navbar></Navbar>
            <DN/>
            <div>
                <h1 className='settings-title'>Settings</h1>

                {isUser ? (

                    <>

                        <Link  className="settings-field">
                            <div>
                                <img src="./icons/Ayuda/llave.png" alt='keyImage'></img>
                            </div>
                            <div className='settings-content'>
                                <h2 className='settings-subtitle'>Change Password</h2>
                                <p className="settings-text">Change your password at any moment</p>
                                <div className="settings-line"></div>
                            </div>
                        </Link>

                        <Link to='/ChangeView' className="settings-field">
                            <div>
                                <img src="./icons/Ayuda/paleta.png" alt='colorImage'></img>
                            </div>
                            <div className='settings-content'>
                                <h2 className='settings-subtitle'>Change View</h2>
                                <p className="settings-text">Change the palette of our app</p>
                                <div className="settings-line"></div>
                            </div>
                        </Link>

                        <Link to='/ChangeLanguage' className="settings-field">
                            <div>
                                <img src="./icons/Ayuda/mundo.png" alt='languageImage'></img>
                            </div>
                            <div className='settings-content'>
                                <h2 className='settings-subtitle'>Change Language</h2>
                                <p className="settings-text">Change the palette of our app</p>
                                <div className="settings-line"></div>
                            </div>
                        </Link>

                        <Link to='/DeleteAccount' className="settings-field">
                            <div>
                                <img src="./icons/Ayuda/basura.png" alt='deleteImage'></img>,
                            </div>
                            <div className='settings-content'>
                                <h2 className='settings-subtitle'>Delete your Account</h2>
                                <p className="settings-text">Delete your current account</p>
                                <div className="settings-line"></div>
                            </div>
                        </Link>

                        <Link to='/EmailSent' className="settings-field">
                            <div>
                                <img src="/icons/Ayuda/sobre.png" alt='sendImage'></img>
                            </div>
                            <div className='settings-content'>
                                <h2 className='settings-subtitle'>Control Emails Sent</h2>
                                <p className="settings-text">Control if you want to receive notifications from us or not.</p>
                                <div className="settings-line"></div>
                            </div>
                        </Link>


                        <Link onClick={loadHelpSystem} className="settings-field">
                            <div>
                                <img src="/icons/Ayuda/interrogatorio.png" alt='helpImage'></img>
                            </div>
                            <div className='settings-content'>
                                <h2 className='settings-subtitle'>Help</h2>
                                <p className="settings-text">See how to navigate and perform all actions</p>
                                <div className="settings-line"></div>
                            </div>
                        </Link>


                    </>


                ) :
                    <>
                        <Link to='/ChangeView' className="settings-field">
                            <div>
                                <img src="/icons/Ayuda/paleta.png" alt='colorImage'></img>
                            </div>
                            <div className='settings-content'>
                                <h2 className='settings-subtitle'>Change View</h2>
                                <p className="settings-text">Change the palette of our app</p>
                                <div className="settings-line"></div>
                            </div>
                        </Link>

                        <Link to='/ChangeLanguage' className="settings-field">
                            <div>
                                <img src="/icons/Ayuda/mundo.png" alt='languageImage'></img>
                            </div>
                            <div className='settings-content'>
                                <h2 className='settings-subtitle'>Change Language</h2>
                                <p className="settings-text">Change the palette of our app</p>
                                <div className="settings-line"></div>
                            </div>
                        </Link>

                        <Link onClick={loadHelpSystem} className="settings-field">
                            <div>
                                <img src="/icons/Ayuda/interrogatorio.png" alt='helpImage'></img>
                            </div>
                            <div className='settings-content'>
                                <h2 className='settings-subtitle'>Help</h2>
                                <p className="settings-text">See how to navigate and perform all actions</p>
                                <div className="settings-line"></div>
                            </div>
                        </Link>

                    </>


                }


                <div className='sss'></div>


            </div>
            <DownMenu></DownMenu>


        </>
    )
}

export default Settings


