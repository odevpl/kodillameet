import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

const UsersBox = () => {
  
    return ( 
        <div className="users_box">
            <h1>Kursanci</h1>
            <div className="underline"></div>
            <div className="users_numbers">
                <FontAwesomeIcon icon={faUser} className="users_icon"/>
                <p>Aktualna liczba kursantów: 54</p>
            </div>
            <div className="users_buttonsDiv">
                <button>Dodaj kursanta</button>
                <button>Umów lekcję</button>
                <button>Pokaz logi</button>
            </div>
        </div>
    )
}

export default UsersBox;