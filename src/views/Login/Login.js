export const Login = () => {
  return (
    <form onSubmit>
      <label>
        <input
          type="email"
          //   value
          placeholder="Enter  your email"
          onChange
        ></input>
      </label>
      <label>
        <input
          type="text"
          //   value
          placeholder="Enter  your password"
          onChange
        ></input>
      </label>
      <button type="submit">LogIn</button>
      <button type="submit">Login with Google</button>
    </form>
  );
};
