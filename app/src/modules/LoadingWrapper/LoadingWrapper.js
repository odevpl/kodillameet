import { useState, useEffect } from "react";
export const fetchSetting = {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: JSON.stringify({
    filters: {},
  }),
};

const LoadingWrapper = (props) => {
  const Component = props.component;
  const [state, setState] = useState({
    isLoaded: false,
    payload: null,
  });

  const preparedSettings = () =>
    props.filters
      ? {
          ...fetchSetting,
          body: JSON.stringify({ filters: { ...props.filters } }),
        }
      : fetchSetting;

  const refreshToken = () => {
    fetch(`${process.env.REACT_APP_API_PATH}/refreshToken`, {
      ...preparedSettings(),
      body: JSON.stringify({
        login: sessionStorage.getItem("login"),
        token: sessionStorage.getItem("refreshToken"),
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        sessionStorage.setItem("accessToken", res.body.accessToken);
        setTimeout(() => {
          fetchData(true);
        }, 2000);
        // fetchData(true);
      });
  };

  const fetchData = async (force) => {
    if (!state.isLoaded || force) {
      await fetch(props.fetch, preparedSettings())
        .then((response) => response.json())
        .then((res) => {
          if (res.error === "BAD TOKEN") {
            refreshToken();
            return;
          }
          setState({
            payload: res,
            isLoaded: true,
          });
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const activeProps =
    props.activeProps && state.payload !== null
      ? props.activeProps(state.payload)
      : {};

  return (
    <>
      {state.isLoaded ? (
        <Component
          {...props.componentProps}
          {...activeProps}
          closeAction={() => {
            props.closeAction();
          }}
          forceUpdate={() => {
            fetchData(true);
          }}
          payload={state.payload}
        />
      ) : (
        "Loading"
      )}
    </>
  );
};

export default LoadingWrapper;
