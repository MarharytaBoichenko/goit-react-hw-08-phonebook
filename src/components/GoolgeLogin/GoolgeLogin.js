import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/auth-operations';

const CLIENT_ID =
  '833112110572-4k4p2jgajs88vl35lvc5lr8svmkkb6m9.apps.googleusercontent.com';

export const LoginGoogle = () => {
  const dispatch = useDispatch();

  ////не работате((( )))
  const onSuccessGoogle = res => {
    console.log('onSuccessResp', res.profileObj);
    dispatch(
      operations.logIn({
        name: res.profileObj.name,
        email: res.profileObj.email,
        // isLoggedIn: true,
      }),
    );
  };

  const onFailureGoogle = response => {
    console.log('onFailureResp', response);
  };

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login"
      onSuccess={onSuccessGoogle}
      onFailure={onFailureGoogle}
      cookiePolicy={'single_host_origin'}
      isLoggedIn={true}
    />
  );
};
