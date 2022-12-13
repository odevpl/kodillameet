import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import UsersBox from '../../modules/UsersBox/UsersBox';
import MessagesBox from '../../modules/MessagesBox/MessagesBox';
import CalendarBox from '../../modules/CalendarBox/CalendarBox';
import Modal from '../../modules/Modal/Modal';

import CalendarContext from '../../providers/CalendarProvider';
import { useContext } from 'react';

const Admin = () => {

    // const { item } = useContext(CalendarContext) - useContext test

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
            <div className="row">
              <UsersBox action={OpenModal}/>
              <MessagesBox />
            </div>
            <CalendarBox />
          </section>

          <Modal toggle={modalState} action={OpenModal}>
            Hello
          </Modal>

        </div>  
      </main>
    )
    
  };
  
  export default Admin;