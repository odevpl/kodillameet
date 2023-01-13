import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import MessagesAdmin from '../../modules/MessagesAdmin/MessagesAdmin';
import CalendarAdmin from '../../modules/CalendarAdmin/CalendarAdmin';
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
            <MessagesAdmin />
            <CalendarAdmin openModal={OpenModal}/>
          </section>

          <Modal toggle={modalState} action={OpenModal}>
            Hello
          </Modal>

        </div>  
      </main>
    )
    
  };



export default Admin;
