import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Messages from '../../modules/Messages/Messages';
import Calendar from '../../modules/Calendar/Calendar';
import Modal from '../../modules/Modal/Modal';

const Admin = ({ payload }) => {
  const [modalState, setModalState] = useState(false);

    const OpenModal = () => {
        setModalState(!modalState)
    }

    return ( 
      <main>
        <div className="container" id="1">
          
          <aside className="sidebar">
            <div className="sidebar-content">
              <FontAwesomeIcon icon={faCalendarDays} className="sidebar-icon"/>
              <h3>Admin</h3>
            </div>
          </aside>

          <section className="admin-content"> 
            <Messages />
            <Calendar openModal={OpenModal}/>
          </section>

          <Modal toggle={modalState} >
            Hello
          </Modal>

        </div>  
      </main>
    )
    
  };



export default Admin;
