import fetch from 'isomorphic-fetch';

export function get(url) {
  const promise = new Promise((resolve, reject) => {
    fetch(`${url}`, {
      method: 'get',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    })
    .then(body => {
      resolve(body);
    })
    .catch(error => reject(error));
  });

  return promise;
}

export function post(url, payload) {
  const promise = new Promise((resolve, reject) => {
    fetch(`${url}`, {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    })
    .then(body => resolve(body))
    .catch(error => reject(error));
  });

  return promise;
}

export function put(url, payload) {
  const promise = new Promise((resolve, reject) => {
    fetch(`${url}`, {
      method: 'put',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    })
    .then(body => resolve(body))
    .catch(error => reject(error));
  });

  return promise;
}

export function remove(url, payload) {
  const promise = new Promise((resolve, reject) => {
    fetch(`${url}`, {
      method: 'delete',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    })
    .then(body => resolve(body))
    .catch(error => reject(error));
  });

  return promise;
}
