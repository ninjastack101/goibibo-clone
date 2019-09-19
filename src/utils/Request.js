import { CORS_URL } from '../constants/links';

const apiRequest = async (url) => {
  const proxyurl = CORS_URL;
  const res = await fetch(proxyurl + url, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  const response = await (res.text());
  return response;
};

export default apiRequest;
