import React, { createContext, useReducer } from "react";

const initialState = {
  contacts: [],
  messages: {},
  selectedContact: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "SET_MESSAGES":
      return { ...state, messages: { ...state.messages, ...action.payload } };
    case "SET_SELECTED_CONTACT":
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
}

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
