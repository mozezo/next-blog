import React, { useReducer } from 'react';

export const SearchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const SearchProvider = ({ children, query }) => {
  const [searchItems, dispatch] = useReducer(reducer, query);
  return (
    <SearchContext.Provider value={{ searchItems, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
