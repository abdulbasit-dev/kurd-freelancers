import React, {createContext, useReducer} from 'react';

export const AuthContext = createContext();

const initialState = {
  user: {},
};

export const ACTIONS = {
  USER: 'USER',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.USER:
      return {...state, user: action.user};

    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
