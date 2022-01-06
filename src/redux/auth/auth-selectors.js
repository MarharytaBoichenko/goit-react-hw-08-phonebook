const getName = state => state.auth.user.name;

const getIsLoggedIn = state => state.auth.isLoggedIn;
const getToken = state => state.token;
const getRefreshing = state => state.auth.isRefreshing;

export { getName, getIsLoggedIn, getToken, getRefreshing };
