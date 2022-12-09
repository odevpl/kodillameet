import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import UsersBox from '../../modules/UsersBox/UsersBox';
import MessagesBox from '../../modules/MessagesBox/MessagesBox';
import CalendarBox from '../../modules/CalendarBox/CalendarBox';

const Admin = () => {
  
    return ( 
      <main>
        <div className="container" id="1">
          
          <aside className="sidebar">
            <div className="sidebar_content">
              <FontAwesomeIcon icon={faCalendarDays} className="sidebar_icon"/>
              <h3>Admin</h3>
            </div>
          </aside>

          <section className="admin_content">
            <div className="row">
              <UsersBox />
              <MessagesBox />
            </div>
            <CalendarBox />
          </section>

        </div>  
      </main>
    )
    
  };
  
  export default Admin;