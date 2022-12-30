import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import MessagesUser from '../../modules/MessagesUser/MessagesUser';
import CalendarUser from '../../modules/CalendarUser/CalendarUser';

const User = () => {

    return ( 
      <main>
        <div className="container" id="1">
          
          <aside className="sidebar">
            <div className="sidebar-content">
              <FontAwesomeIcon icon={faCalendarDays} className="sidebar-icon"/>
              <h3>User</h3>
            </div>
          </aside>

          <section className="admin-content"> 
            <MessagesUser />
            <CalendarUser />
          </section>

        </div>  
      </main>
    )
    
  };
  
  export default User;