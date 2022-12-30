export const convertToArray = (data) => {
  const table = [];
  for(let key in data) {
    table.push({id: key, value: data[key]});
  }
  return table;
}

export const convertToObject = (data) => {
  const object = {};
  for(let item of data) {
    object[item.id] = item.value;
  }
  return object;
}