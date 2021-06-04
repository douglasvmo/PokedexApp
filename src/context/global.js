import React from 'react';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'switchTheme':
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return {
        ...state,
      };
  }
};

export const initialState = {
  theme: 'dark',
};

export const StateContext = React.createContext(initialState);

export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={React.useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useGlobals = () => React.useContext(StateContext);
