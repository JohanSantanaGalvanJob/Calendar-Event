import { Link } from 'react-router-dom';
import './DownMenu.css';


export const DownMenu = () => {
    return (
        <>
            <div className='down-menu-field'>
                <Link to='/Event'>
                    <img src='./icons/MenuAbajo/hogar.png'></img>
                </Link>
                <a><img src='./icons/MenuAbajo/busqueda.png'></img></a>
                <Link to='/Add'>
                    <a><img src='./icons/MenuAbajo/mas.png'></img></a>
                </Link>
                <a><img src='./icons/MenuAbajo/estrella.png'></img></a>
            </div>

        </>
    )
}