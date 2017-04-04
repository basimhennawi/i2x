import { call, setAccessToken, removeToken } from 'utils/api';
import Q from 'q';

const login = ({ email, password }) => call({
  method: 'post',
  url: 'https://i2x-challenge.herokuapp.com/core/login/',
  data: { email, password },
  useToken: false,
})
.then((res) => {
  if (res.token) setAccessToken(res.token);
  return res;
});

const logout = () => {
  removeToken();
  return Q.resolve();
};

export default {
  login,
  logout,
};
