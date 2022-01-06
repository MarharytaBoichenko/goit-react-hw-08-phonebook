import { Container, Typography, Box } from '@mui/material';

import { Header } from 'components/Header/Header';
import Image from '../../FreeVector-Phonebook.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth="sm"
        sx={{
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mt: '50px', fontWeight: '700' }}>
          Hello, I`m phonebook to manage your contacts.
        </Typography>
        <Box
          sx={{
            backgroundImage: `url(${Image})`,
            width: '500px',
            height: '350px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '5%',
          }}
        />
      </Container>
    </>
  );
};
export default Home;
