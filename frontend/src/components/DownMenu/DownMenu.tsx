import { Link } from 'react-router-dom';
import './DownMenu.css';


export const DownMenu = () => {
    return (
        <>
            <div className='down-menu-field'>
                <Link to='/Event'>
                    <img src='./icons/MenuAbajo/hogar.png'></img>
                </Link>
                <img src='./icons/MenuAbajo/busqueda.png'></img>
                <Link to='/Add'>
                    <img src='./icons/MenuAbajo/mas.png'></img>
                </Link>
                <img src='./icons/MenuAbajo/estrella.png'></img>
            </div>

        </>
    )
}