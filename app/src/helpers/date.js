import { format } from "date-fns";

export const getFormatedData = (data) => {
  const date = new Date(data);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  return (d <= 9 ? "0" + d : d) + "-" + (m <= 9 ? "0" + m : m) + "-" + y;
};

export const postDateSave = (data) => {
  // const date = new Date(data);
  // const d = date.getDate();
  // const m = date.getMonth() + 1;
  // const y = date.getFullYear();

  // return (y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d));

  return format(new Date(data), "yyyy-MM-dd");
};
