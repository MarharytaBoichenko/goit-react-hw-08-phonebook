import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const CLIENT_ID =
//   '833112110572-4k4p2jgajs88vl35lvc5lr8svmkkb6m9.apps.googleusercontent.com';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

///чтобы не  передаваnmd каждом запросе заголовок с токеном создаем объект токена
//сетит  токен на хедеры

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const register = createAsyncThunk(
  'user/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      console.log(response.data.token);

      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400) {
        alert('User creation error! Please try again!');
      } else if (error.response.status === 500) {
        alert('Server error! Please try again later!');
      } else {
        alert('Oops, something went wrong!');
      }
      return rejectWithValue(error);
    }
  },
);

const logIn = createAsyncThunk(
  'user/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      console.log(token);
      token.set(data.token);
      return data;
    } catch (error) {
      alert('Invalid email or password! Please enter correct data!');
      return rejectWithValue(error);
    }
  },
);

const logOut = createAsyncThunk('user/logOut', async () => {
  try {
    axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
    alert('Something went wrong! Please try again!'); //обрабатывать ошибку
  }
});

//// надо доставать токен  через  getState  из  локал  сторидж

const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, thunkAPI) => {
    //получаем весь state
    const state = thunkAPI.getState();
    //из  него  токен, который сохранял персист  (если он есть)
    const persistedToken = state.user.token;
    // console.log(persistedToken);
    //если токена нет  сохраненного то пользователя  нет , даем ошибку
    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();

      //если оставить просто returт то он  возвращает undefined  и оно идет в payload и потом все падает

      ///не совсем понятно (((
    }
    //   если  он есть в локал стор, то  сетим токен в заголовок  и отправляем запрос за данными юзера
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
      // token.unset();
      // alert('Your session has timed out. Please login again!');
    }
  },
);
const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
