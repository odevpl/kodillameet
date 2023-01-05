import { DICTIONARIES } from "../dictionaries";

export const translate = (type, id) => {
  console.log({ type });
  return DICTIONARIES[type][id];
};
export const translateMore = (type, ids) => {
  let correctIds = ids;
  if (typeof ids === "string") {
    correctIds = ids.split(",");
  }

  return correctIds.map(id => translate(type, id)).join(",");
};
