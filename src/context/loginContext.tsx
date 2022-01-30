import React, { createContext, useReducer } from "react";

const initialState = {
  password: "haslo",
  isLogged: false,
};

type State = typeof initialState;
type Action = { type: "TOGGLE_IS_LOGGED" };


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_IS_LOGGED":
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    default:
      return state;
  }
};

interface Context {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const LoginContext = createContext<Context>({ state: initialState, dispatch: () => { } });

interface LoginContextValueProps {
  children: React.ReactNode;
}

export const LoginContextValue = ({ children }: LoginContextValueProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};