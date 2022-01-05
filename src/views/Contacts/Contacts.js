import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Heading } from '../../components/Heading/Heading';
import { ContainerBox } from '../../components/Container/Container';

// import { UserMenu } from '../../components/User Menu/userMenu';
import { Header } from '../../components/Header/Header';

const Contacts = () => {
  return (
    <>
      <Header />
      <ContainerBox>
        <Heading text="Phonebook" />
        <ContactForm />
        <Heading text="Contacts" />
        <Filter />
        <ContactList />
      </ContainerBox>
    </>
  );
};

export default Contacts;
