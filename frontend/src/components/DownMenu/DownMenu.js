import { Link } from 'react-router-dom';
import './DownMenu.css';



export const DownMenu = () => {
    const user = JSON.parse(localStorage.getItem('userData'))

    // const isGuest = !user;
    const isAdmin = !!user?.role.includes('admin');
    const isUser = !!user;

    return (
        <>
            <div className='down-menu-field'>
                <Link to='/Event'>
                    <img src='/icons/MenuAbajo/hogar.png'></img>
                </Link>
                <Link to='/SearchPage'>
                <img src='/icons/MenuAbajo/busqueda.png'></img>
                </Link>
                
                {isAdmin ? (
                    <Link to='/Add'>
                        <img src='/icons/MenuAbajo/mas.png'></img>
                    </Link>
                ) : null}

                {isUser ? (
                    <Link to='/Favourite'>
                        <img src='/icons/MenuAbajo/estrella.png'></img>
                    </Link>
                ) : null}

            </div>

        </>
    );
}