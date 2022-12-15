import './EventField.css';


export const EventField = props => {
    const user = JSON.parse(localStorage.getItem('userData'))
    const isUser = !!user;
    return (
        <>
            <div className='event-field'>
                <div>
                    <img className='event-field-img' src={props.event.image}></img>
                </div>
                <div className='event-field-content'>
                    <h4 className='event-field-title'>{props.event.title}</h4>
                    <div className="event-field-line"></div>
                    <p>{props.event.description}</p>
                    {isUser ? (
                        <div className='event-field-icon'>
                            <img src='./icons/MenuAbajo/estrella.png'></img>
                        </div>
                    ) : null
                    }
                </div>
            </div>

        </>
    )
}