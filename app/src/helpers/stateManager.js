import { get } from "lodash";

export const createInitialState = (payload, config) => {
  const data = {};

  config.forEach((value) => {
    data[value[0]] = get(payload, value[0], value[1]);
  });

  return data;
};

export const onFormStateChange = (data, { id, value }, setData) => {
  setData({
    ...data,
    [id]: value,
  });
};
