import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Heading } from '../../components/Heading/Heading';
import { Container } from '../../components/Container/Container';
import { UserMenu } from '../../components/UserMenu/userMenu';

export const Contacts = () => {
  return (
    <>
      <Container>
        <UserMenu />
        <Heading text="Phonebook" />
        <ContactForm />
        <Heading text="Contacts" />
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};
