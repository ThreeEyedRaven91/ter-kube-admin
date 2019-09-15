let user = false;

let listeners = [];

const addListener = (listener) => listeners.push(listener);

const removeListener = (listener) => {
  listeners = listeners.filter((l) => l !== listener);
};

const setUser = (u) => {
  user = u;
  listeners.forEach((l) => l(user));
};

const getUser = () => user;

const loadUser = () => {
  try {
    const token = localStorage.getItem('@noticeeme:accessToken');
    if (token !== null) {
      setUser({
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const saveUser = () => {
  if (user) {
    localStorage.setItem('@noticeeme:accessToken', user.token);
  } else {
    localStorage.removeItem('@noticeeme:accessToken');
  }
};

const logout = () => {
  setUser(false);
  saveUser();
};

export default {
  setUser,
  getUser,
  loadUser,
  saveUser,
  logout,
  addListener,
  removeListener,
};
