import './BackButton.css';

export const BackButton = () => {

    const handleClick = () => {
        window.history.back();
    }

    return(
        <>
        <img src='../../../icons/MenuArriba/back.png' onClick={handleClick}/>
        
        </>
    );
}