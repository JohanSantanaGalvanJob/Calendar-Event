import { Link } from 'react-router-dom';
import './UpMenu.css';


export const UpMenu = () => {
    return (
        <>
            <div className='up-menu-field'>
            <img src='./icons/MenuAbajo/mas.png'></img>
                
                <img src='./icons/MenuArriba/logo.png'></img>
                <Link to='/Settings'>
                <img src='./icons/MenuArriba/ajustes.png'></img>
                </Link>
                
            </div>

        </>
    )
}