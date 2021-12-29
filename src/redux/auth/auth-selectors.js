const getName = state => state.user.user.name;

const getIsLoggedIn = state => state.user.isLoggedIn;
const getToken = state => state.token;
const getRefreshing = state => state.user.isRefreshing;

export { getName, getIsLoggedIn, getToken, getRefreshing };
