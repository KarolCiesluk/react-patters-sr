import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Content, Menu, Movies, PassphraseForm, Places } from "./components";
import NavItem from "./components/NavItem";
import { LoginContextValue } from "./context/loginContext";
import { UserContext } from "./context/userContext";
import { toContent, toMovies, toPlaces } from "./routes";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <LoginContextValue>

          <Menu>
            {isMobile => {
              const variant = isMobile ? "mobile" : "desktop";

              return (
                <>
                  <NavItem to={toContent()} label="Content" variant={variant} />
                  <NavItem to={toMovies()} label="Movies" variant={variant} />
                  <NavItem to={toPlaces()} label="Places" variant={variant} />
                </>
              );
            }}
          </Menu>

          <main className="app_main">
            <UserContext.Provider
              value={{
                email: "jan@kowalski.pl",
                isAdmin: false,
              }}
            >
              <Routes>
                <Route index element={<PassphraseForm />} />
                <Route path={toContent()} element={<Content />} />
                <Route path={toMovies()} element={<Movies />} />
                <Route path={toPlaces()} element={<Places />} />
              </Routes>
            </UserContext.Provider>

          </main>

        </LoginContextValue>
      </div>
    </Router >
  );
}

export default App;