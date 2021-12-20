import './App.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';

//сделать  lazy  загрузку
import { Contacts } from './views/Contacts/Contacts';
import { Login } from './views/Login/Login';
import { Register } from './views/Register/Register';
import { Home } from './views/Home/Home';
// import Counter from "./Counter/counter";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="contacts" element={<Contacts />} />
      {/* // <Container>
          {/* // <Counter /> */}
      {/* <Heading text="Phonebook" /> */}
      {/* <ContactForm /> */}
      {/* <Heading text="Contacts" /> */}
      {/* <Filter /> */}
      {/* <ContactList /> */}
      {/* </Container> * / */}
    </Routes>
  );
}
