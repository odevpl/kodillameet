import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';

const UsersBox = (props) => {
  
    return ( 
        <div className="user-box">
            <h1>Kursanci</h1>
            <div className="underline"></div>
            <div className="user-numbers">
                <FontAwesomeIcon icon={faUser} className="user-icon"/>
                <p>Aktualna liczba kursantów: 54</p>
            </div>
            <div className="user-buttons-div">
                <button onClick={props.action}>Dodaj kursanta</button>
                <button onClick={props.action}>Umów lekcję</button>
                <button onClick={props.action}> Pokaz logi</button>
            </div>
        </div>
    )
}

export default UsersBox;