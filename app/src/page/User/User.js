import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

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

          <section className="admin-content"></section>

        </div>  
      </main>
    )
    
  };
  
  export default User;