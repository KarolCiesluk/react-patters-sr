import { createContext, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Content, PassphraseForm } from "./components";

interface LoginContextInterface {
  password: string;
  isLogged: boolean;
  toggleIsLogged: () => void;
}

export const LoginContext = createContext({} as LoginContextInterface);

export const UserContext = createContext({
  email: "jan@kowalski.pl",
  isAdmin: false,
});

function App() {
  const toggleIsLogged = () => {
    setLoginState(currentState => ({ ...currentState, isLogged: !currentState.isLogged }));
  };

  const [loginState, setLoginState] = useState({
    password: "haslo",
    isLogged: false,
    toggleIsLogged,
  });

  return (
    <Router>
      <LoginContext.Provider value={loginState}>
        <Routes>
          <Route index element={<PassphraseForm />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;