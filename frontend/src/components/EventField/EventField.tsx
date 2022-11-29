import './EventField.css';


export const EventField = () => {
    return (
        <>
            <div className='event-field'>
                <div>
                    <img className='event-field-img' src='./img/likes.jpg'></img>
                </div>
                <div className='event-field-content'>
                    <h4 className='event-field-title'>Likes y Cicatrices</h4>
                    <div className="event-field-line"></div>
                    <p>¿Tienes ganas de escuchar los últimos  éxitos de uno de los artisas más influyentes de España? Melendi celebra otro de sus conciertos aquí en Gran Canaria....</p>
                    <div className='event-field-icon'>
                        <img src='./icons/MenuAbajo/estrella.png'></img>
                    </div>
                </div>
            </div>

        </>
    )
}