/**
 * Created by zh on 2019/3/6.
 */
export const get = (url, init = { method: 'GET' }) => {
  return fetch(url, init).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('response status: ' + res.status);
  }).catch(e => console.error('Error: ', e));
};

