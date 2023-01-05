import { translateMore } from "./translate";

export const getFullName = (props) => {
  try {
    const { imie, nazwisko } = props;
    return `${imie} ${nazwisko}`;
  } catch {
    return "";
  }
};

export const translateMoreList = (props) => {
  try {
    return translateMore();
  } catch {
    return "";
  }
};
