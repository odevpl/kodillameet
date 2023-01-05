import { DICTIONARIES } from "dictionaries";

export const filteredDictionaries = (ids, type) => {
  const newConfig = {};

  for (let key in DICTIONARIES[type]) {
    if (ids.split(",").includes(key)) {
      newConfig[key] = DICTIONARIES[type][key];
    }
  }
  return newConfig;
};
