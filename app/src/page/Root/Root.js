import Admin from "../Admin/Admin";
import User from "../User/User";
import LoadingWrapper from "../../modules/LoadingWrapper/LoadingWrapper";

const Root = () => {
  const windowHash = window.location.hash.slice(1);

  return (
    <main>
      <div>
        <LoadingWrapper
          fetch={`${process.env.REACT_APP_API_PATH}/terms`}
          component={Admin}
        />
        {windowHash == 1 ? <Admin /> : <User />}
      </div>
    </main>
  );
};

export default Root;
