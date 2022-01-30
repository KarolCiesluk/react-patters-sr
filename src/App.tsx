import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Content, Movies, PassphraseForm, Places } from "./components";
import { LoginContextValue } from "./context/loginContext";
import { UserContext } from "./context/userContext";

function App() {
  return (
    <Router>
      <LoginContextValue>
        <UserContext.Provider
          value={{
            email: "jan@kowalski.pl",
            isAdmin: false,
          }}
        >
          <Routes>
            <Route index element={<PassphraseForm />} />
            <Route path="/content" element={<Content />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/places" element={<Places />} />
          </Routes>
        </UserContext.Provider>
      </LoginContextValue>
    </Router>
  );
}

export default App;