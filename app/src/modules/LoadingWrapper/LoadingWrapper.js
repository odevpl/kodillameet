import { useState, useEffect } from "react";
import { fetchSetting } from "../../helpers/fetchConfig";
import { get } from "lodash";

const LoadingWrapper = (props) => {
  const Component = props.component;
  const [state, setState] = useState({
    isLoaded: false,
    payload: null,
  });

  const fetchSettingWithAccessToken = () => ({
    ...fetchSetting,
    headers: {
      ...fetchSetting.headers,
      ["access-token"]: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });

  const preparedSettings = (parameters) => {
    const body = {
      ...parameters,
      filters: {
        ...get(props, "filters", {}),
        ...get(parameters, "filters", {}),
      },
      compartments: props.compartments,
      ...props.bodyParams,
    };

    return {
      ...fetchSettingWithAccessToken(),
      body: JSON.stringify(body),
    };
  };

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
      });
  };

  const fetchData = async (force, parameters) => {
    if (!state.isLoaded || force) {
      await fetch(props.fetch, preparedSettings(parameters))
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

  useEffect(async () => {
    await fetchData();
  }, []);

  const activeProps =
    props.activeProps && state.payload !== null
      ? props.activeProps(state.payload)
      : {};

  return (
    <>
      {state.isLoaded ? (
        <Component
          closeAction={() => {
            if (props.closeAction) {
              props.closeAction();
            } else {
              const close = get(props, "componentProps.closeAction", () => {});
              close();
            }
          }}
          {...props.componentProps}
          {...activeProps}
          forceUpdate={() => {
            fetchData(true);
          }}
          resendWithParameters={(parameters) => {
            fetchData(true, parameters);
          }}
          setTherapyData={props.setTherapyData}
          payload={state.payload}
        />
      ) : (
        "Loading"
      )}
    </>
  );
};

export default LoadingWrapper;
