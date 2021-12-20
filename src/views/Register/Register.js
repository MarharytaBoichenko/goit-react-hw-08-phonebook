export const Register = () => {
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
          pattern="/^[a-zA-Z0-9]+/"
          title="Пароль должен состоять из цифр и латинских букв верхнего и нижнего регистра"
        ></input>
      </label>
      <button type="submit">Register</button>
      <button type="submit">Login with Google</button>
    </form>
  );
};
