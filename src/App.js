import './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//сделать  lazy  загрузку
import { Contacts } from './views/Contacts/Contacts';
import { Login } from './views/Login/Login';
import { Register } from './views/Register/Register';
import { Home } from './views/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import operations from './redux/auth/auth-operations';
import { getRefreshing } from './redux/auth/auth-selectors';
// import Counter from "./Counter/counter";

export default function App() {
  const dispatch = useDispatch();
  const refreshing = useSelector(getRefreshing);
  console.log(refreshing);

  ////при загрузке  приложения  запрашиваем  текущего пользователя
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    ///для  предотвращения  мигания страниц при перезагрузке страницы  -  пока загрузка  не рендерится,  когд получены данные польз  тогда рендер

    !refreshing && (
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>
    )
  );
}
