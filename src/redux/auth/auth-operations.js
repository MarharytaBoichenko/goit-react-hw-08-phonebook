import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
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

const register = createAsyncThunk('user/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);
    console.log(response.data.token);

    token.set(response.data.token);
    return response.data;
  } catch (err) {
    console.log(err);
    //   return rejectWithValue(err.response.data);
    /////  как  обрабатывать ошибки ????
  }
});

const logIn = createAsyncThunk('user/logIn', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    console.log(token);
    token.set(data.token);
    return data;
  } catch (error) {
    //обрабатывать ошибку
  }
});

const logOut = createAsyncThunk('user/logOut', async () => {
  try {
    axios.post('/users/logout');
    token.unset();
  } catch (error) {
    //обрабатывать ошибку
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
      //обрабатывать ошибку
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
