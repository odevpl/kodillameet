import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

const UsersBox = () => {
  
    return ( 
        <div className="user-box">
            <h1>Kursanci</h1>
            <div className="underline"></div>
            <div className="user-numbers">
                <FontAwesomeIcon icon={faUser} className="user-icon"/>
                <p>Aktualna liczba kursantów: 54</p>
            </div>
            <div className="user-buttons-div">
                <button>Dodaj kursanta</button>
                <button>Umów lekcję</button>
                <button>Pokaz logi</button>
            </div>
        </div>
    )
}

export default UsersBox;