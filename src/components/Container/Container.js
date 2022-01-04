import { Container } from '@mui/material';
import PropTypes from 'prop-types';
export const ContainerBox = ({ children }) => {
  return (
    <Container
      sx={{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
    </Container>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};
