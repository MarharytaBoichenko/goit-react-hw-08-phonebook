import { GoogleLogout } from 'react-google-login';
const CLIENT_ID =
  '833112110572-4k4p2jgajs88vl35lvc5lr8svmkkb6m9.apps.googleusercontent.com';

export const LogoutGoogle = () => {
  const onSuccessLogout = () => {
    console.log('Logout made  successfully');
  };
  return (
    <GoogleLogout
      clientId={CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={onSuccessLogout}
    />
  );
};
