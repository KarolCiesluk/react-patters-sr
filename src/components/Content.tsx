import { useContext } from "react";
import { LoginChecker } from ".";
import { LoginContext } from "../context/loginContext";

const Content = () => {
  const { state: { password } } = useContext(LoginContext);

  return (
    <LoginChecker>
      <h1>Success!</h1>
      <p>
        Correct password: <strong>"{password}"</strong>
      </p>
    </LoginChecker>
  );
};

export default Content;