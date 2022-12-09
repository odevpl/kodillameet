import Admin from '../Admin/Admin';
import User from '../User/User';

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
