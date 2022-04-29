import queryString from 'query-string';

const getAccessToken = () => {
  const parsedHash = queryString.parse(window.location.hash);
  return parsedHash.access_token;
};

export default getAccessToken;
