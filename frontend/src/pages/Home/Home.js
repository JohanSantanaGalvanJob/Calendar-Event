import { Link } from 'react-router-dom';
import './Home.css';




export const Home = () => {
    return (
        <>

            <div className="home-style">
                <h2 className="home-title">Welcome to Event Calendar App</h2>
                <div className="home-line"></div>
                <div className='home-content'>
                    <p className="home-text">If you don't have an account</p>
                    <Link to="/SignUp">
                        <button className="home-button">Sign Up</button>
                    </Link>
                </div>
                <div className='home-content'>
                    <p className="home-text">Or, if you already signed</p>
                    <Link to="/LogIn">
                        <button className="home-button">Log In</button>
                    </Link>
                </div>
                <div className='home-content'>
                    <p className="home-text">You don't want to log or create account?</p>
                    <Link to='/Event'>
                        <button className="home-button">Continue</button>
                    </Link>
                </div>
            </div>
            <div className='first-page-container'>
                <div className='home-image-container'>
                    <img className='home-image' src='./img/AppLogo.png'></img>
                </div>
            </div>
            <style>{'body { background-color: #CCF2F4;}'}</style>

        </>
    )
}