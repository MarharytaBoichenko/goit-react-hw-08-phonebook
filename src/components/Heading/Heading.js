import { Typography } from '@mui/material';

export const Heading = ({ text }) => {
  return (
    <Typography variant="h4" component="h2" sx={{ mb: '5px', mt: '5px' }}>
      {text}
    </Typography>
  );
};
