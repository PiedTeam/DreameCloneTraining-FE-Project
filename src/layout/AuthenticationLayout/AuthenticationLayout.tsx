interface PropType {
  children: React.ReactNode;
}

const AuthenticationLayout = (props: PropType): JSX.Element => {
  return (
    <div>
      AuthenticationLayout
      {props.children}
      <div>
        <input type="text" placeholder="Username" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
