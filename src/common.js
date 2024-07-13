export const camelToSnakeCaseKeys = (obj) => {
  const newObj = {};
  for (let key in obj) {
    newObj[key.replace(/([A-Z])/g, "_$1").toLowerCase()] = obj[key];
  }
  return newObj;
};

export const camelToSnakeCaseString = (str) =>{
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}


export const snakeCaseToCamelString = (str) => {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("_", "")
  );
};
