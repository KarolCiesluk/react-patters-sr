import { useContext } from "react";
import { Link } from "react-router-dom";

import { LoginContext } from "../context/loginContext";
import { toPassphraseForm } from "../routes";

interface ContentProps {
  children: React.ReactNode;
}

const LoginChecker = ({ children }: ContentProps) => {
  const { state: { isLogged } } = useContext(LoginContext);

  const checkIsLogged = () => {
    return isLogged ? (
      <>
        {children}
      </>
    ) : (
      <div>
        <h1>Page is not available. You have to log in first!</h1>
        <Link to={toPassphraseForm()}>Back to login form</Link>
      </div>
    );
  };

  return (
    <>{checkIsLogged()}</>
  );
};

export default LoginChecker;