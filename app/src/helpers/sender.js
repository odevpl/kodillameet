import {fetchSetting} from "./fetchConfig";
import {postDateSave} from "./date";

const fixData = (data) => {
  const dataToFixed = data;
  for (let key in dataToFixed) {
    switch (key) {
      case "data_od":
      case "data_do":
      case "data":
      case "termin":
      case "data_urodzenia":
        dataToFixed[key] = postDateSave(dataToFixed[key]);
    }
  }
  return dataToFixed;
};

export const sender = async (
  endpoint,
  data,
  callback,
  alertText,
  alertType = "success"
) => {
  const preparedData = fixData(data);
  const output = await fetch(`${process.env.REACT_APP_API_PATH}/${endpoint}`, {
    ...fetchSetting,
    body: JSON.stringify({...preparedData}),
    headers: {
      ...fetchSetting.headers,
      ["access-token"]: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      if (alertText) {
        document.showAlert(alertText, alertType);
      }
      return callback(res);
    });
  return output;
};

export const fileSaver = async (endpoint, file, callback) => {
  var data = new FormData();
  data.append("file", file);

  await fetch(`${process.env.REACT_APP_API_PATH}/${endpoint}`, {
    // ...fetchSetting,
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((res) => {
      document.showAlert("Zapisano!", "success");
      callback(res);
    });
};
