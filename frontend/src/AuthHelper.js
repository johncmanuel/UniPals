function isLoggedIn() {
  return localStorage.hasOwnProperty("token");
}

function getToken() {
  if (!isLoggedIn()) {
    return null;
  }
  return localStorage.getItem("token");
}
function setToken(token) {
  localStorage.setItem("token", token);
}

function getUser() {
  if (!isLoggedIn()) {
    return null;
  }
  return JSON.parse(localStorage.getItem("user"));
}

function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function logout() {
  localStorage.clear();
}

export { isLoggedIn, getToken, setToken, getUser, setUser, logout };
