export default class localStorage {
  constructor() {
    const test = 'test';
    try {
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
    } catch (e) {
      throw 'Can not use LocalStorage adapter, LocalStorage is not supported'; // eslint-disable-line no-throw-literal
    }
  }

  set(value, name = 'unknown') {
    try {
      window.localStorage.setItem(name, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  get(name = 'unknown') {
    return window.localStorage.getItem(name);
  }

  remove(name = 'unknown') {
    return window.localStorage.removeItem(name);
  }
}
