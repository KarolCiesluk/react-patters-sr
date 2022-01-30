import { useContext } from "react";
import { Link } from "react-router-dom";

import { LoginContext } from "../context/loginContext";

const Content = () => {
  const { state: { password, isLogged } } = useContext(LoginContext);

  const checkIsLogged = () => {
    return isLogged ? (
      <div>
        <h1>Success!</h1>
        <p>
          Correct password: <strong>"{password}"</strong>
        </p>
      </div>
    ) : (
      <div>
        <h1>Content is not available. You have to log in first!</h1>
        <Link to="/">Back to login form</Link>
      </div>
    );
  };

  return (
    <>{checkIsLogged()}</>
  );
};

export default Content;