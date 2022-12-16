import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {

    const modalState = props.toggle;
    const action = props.action;

    return (
        <div className={"modal-container " + (modalState ? 'active' : '')}>

            <div className="modal-content">
                {props.children}
                <FontAwesomeIcon 
                    icon={faXmark} 
                    className="modal-close-btn"
                    onClick={action}
                />
            </div>
        </div>
    )
}

export default Modal;