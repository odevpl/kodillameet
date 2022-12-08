//import styles from './index.module.scss'

import Admin from '../../modules/Admin/Admin';
import User from '../../modules/User/User';

const Root = () => {

  const windowHash = window.location.hash.slice(1);

  return ( 
    <main>
      
      <div>

        { windowHash == 1 ? ( 
        <Admin />
        ) : (
        <User />
        )}

      </div>

    </main>
  )
  
};

export default Root;
