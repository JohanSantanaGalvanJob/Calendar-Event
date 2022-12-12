import { Link } from 'react-router-dom';
import './DownMenu.css';

const user = JSON.parse(localStorage.getItem('userData'))

export const DownMenu = () => {

    return user.role.includes('admin') ? (
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
    ) : <div className='down-menu-field'>
        <Link to='/Event'>
            <img src='./icons/MenuAbajo/hogar.png'></img>
        </Link>
        <img src='./icons/MenuAbajo/busqueda.png'></img>

        <img src='./icons/MenuAbajo/estrella.png'></img>
    </div>;
}