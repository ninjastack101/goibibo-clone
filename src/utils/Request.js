import {CORS_URL} from '../constants/links'

 const apiRequest = async(url) => {
  const proxyurl = CORS_URL;
  let res = await fetch(proxyurl + url, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
  let response = await (res.text());
  return response
}

export default apiRequest