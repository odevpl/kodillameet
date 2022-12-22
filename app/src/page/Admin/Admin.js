import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import MessagesBox from '../../modules/MessagesBox/MessagesBox';
import CalendarBox from '../../modules/CalendarBox/CalendarBox';
import Modal from '../../modules/Modal/Modal';

const Admin = () => {

    const [modalState, setModalState] = useState(false)

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
            <MessagesBox action={OpenModal}/>
            <CalendarBox action={OpenModal}/>
          </section>

          <Modal toggle={modalState} action={OpenModal}>
            Hello
          </Modal>

        </div>  
      </main>
    )
    
  };
  
  export default Admin;