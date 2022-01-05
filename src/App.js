import './App.module.css';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from './components/Loader/Loading';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import operations from './redux/auth/auth-operations';
import { getRefreshing } from './redux/auth/auth-selectors';

const Home = lazy(() =>
  import('./views/Home/Home.js' /* webpackChunkName: "Home" */),
);
const Register = lazy(() =>
  import('./views/Register/Register.js' /* webpackChunkName: "Register" */),
);
const Login = lazy(() =>
  import('./views/Login/Login.js' /* webpackChunkName: "Login" */),
);
const Contacts = lazy(() =>
  import('./views/Contacts/Contacts.js' /* webpackChunkName: "Contacts" */),
);

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
    <div>
      {refreshing ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      )}
    </div>
  );
}
