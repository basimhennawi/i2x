import * as Q from 'q';
import browserRequest from 'browser-request';
import ApiError from './error';
import LocalStorage from './localStorage';

export const setAccessToken = (token) => {
  const storage = new LocalStorage();
  storage.set(token, 'token');
  return true;
};

export const removeToken = () => {
  const storage = new LocalStorage();
  storage.remove('token');
  return true;
};

export const setTokenHeader = (headers) => {
  const newheaders = Object.assign({}, headers);
  const storage = new LocalStorage();
  const token = storage.get('token');
  if (token) {
    newheaders.Authorization = `JWT ${token}`;
  }
  return newheaders;
};

export const getToken = () => {
  const storage = new LocalStorage();
  return storage.get('token');
};

export const call = ({ method, qs, url, data, useToken = true }) => {
  const deferred = Q.defer();

  const options = {
    method: method.toUpperCase(),
    url,
    json: true,
    body: data || {},
    qs: qs || {},
    headers: {},
  };
  // Add token to the header
  if (useToken) {
    options.headers = setTokenHeader(options.headers);
  }

  // Stringify body (required by the browserRequest library)
  options.body = JSON.stringify(options.body);

  browserRequest(options, (err, res, body) => {
    if (err) {
      deferred.reject(new ApiError({ statusCode: res.statusCode, message: res.statusText }));
    } else {
      deferred.resolve(body);
    }
  });
  deferred.promise.catch(({ err }) => err);

  return deferred.promise;
};
