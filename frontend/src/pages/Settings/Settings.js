
import './Settings.css'
import { Link } from 'react-router-dom'
import { UpMenu } from '../../components/UpMenu/UpMenu'
import { DownMenu } from '../../components/DownMenu/DownMenu'
import Navbar from '../../components/Sidebar/Navbar'

const Settings = () => {

    const user = JSON.parse(localStorage.getItem('userData'))
    const isUser = !!user;

    const loadHelpSystem = () => {
        window.location.replace('https://localhost:');
    }



    return (
        <>
            <Navbar></Navbar>
            <div>
                <h1 className='settings-title'>Settings</h1>

                {isUser ? (

                    <>

                        <Link to='/ChangePassword'>
                            <div className="settings-field">
                                <div>
                                    <img src="./icons/Ayuda/llave.png"></img>
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>Change Password</h2>
                                    <p className="settings-text">Change your password at any moment</p>
                                    <div className="settings-line"></div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/ChangeView'>
                            <div className="settings-field">
                                <div>
                                    <img src="./icons/Ayuda/paleta.png"></img>
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>Change View</h2>
                                    <p className="settings-text">Change the palette of our app</p>
                                    <div className="settings-line"></div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/ChangeLanguage'>
                            <div className="settings-field">
                                <div>
                                    <img src="./icons/Ayuda/mundo.png"></img>
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>Change Language</h2>
                                    <p className="settings-text">Change the palette of our app</p>
                                    <div className="settings-line"></div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/DeleteAccount'>
                            <div className="settings-field">
                                <div>
                                    <img src="./icons/Ayuda/basura.png"></img>,
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>Delete your Account</h2>
                                    <p className="settings-text">Delete your current account</p>
                                    <div className="settings-line"></div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/EmailSent'>
                            <div className="settings-field">
                                <div>
                                    <img src="/icons/Ayuda/sobre.png"></img>
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>Control Emails Sent</h2>
                                    <p className="settings-text">Control if you want to receive notifications from us or not.</p>
                                    <div className="settings-line"></div>
                                </div>
                            </div>
                        </Link>

                       <div onClick={}>
                            <div className="settings-field">
                                <div>
                                    <img src="/icons/Ayuda/interrogatorio.png"></img>
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>Help</h2>
                                    <p className="settings-text">See how to navigate and perform all actions</p>
                                    <div className="settings-line"></div>
                                </div>
                            </div>
                            </div>

                    </>


                ) :
                    <>
                        <Link to='/ChangeView'>
                            <div className="settings-field">
                                <div>
                                    <img src="/icons/Ayuda/paleta.png"></img>
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>Change View</h2>
                                    <p className="settings-text">Change the palette of our app</p>
                                    <div className="settings-line"></div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/ChangeLanguage'>
                            <div className="settings-field">
                                <div>
                                    <img src="/icons/Ayuda/mundo.png"></img>
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>Change Language</h2>
                                    <p className="settings-text">Change the palette of our app</p>
                                    <div className="settings-line"></div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/helpSystem/bienvenida.html'>
                            <div className="settings-field">
                                <div>
                                    <img src="/icons/Ayuda/interrogatorio.png"></img>
                                </div>
                                <div className='settings-content'>
                                    <h2 className='settings-subtitle'>Help</h2>
                                    <p className="settings-text">See how to navigate and perform all actions</p>
                                    <div className="settings-line"></div>
                                </div>
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


