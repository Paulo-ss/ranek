const serialize = (objeto) => {
  let queryString;

  for (let key in objeto) {
    queryString += `&${key}=${objeto[key]}`;
  }

  return queryString;
};

export default serialize;
