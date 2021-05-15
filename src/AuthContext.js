import React, {createContext, useReducer, useCallback} from 'react';

export const AuthContext = createContext();

const initialState = {
  user: {},
};

export const ACTIONS = {
  USER: 'user',
  LOGIN: 'login',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.USER:
      return {...state, user: action.user};
    case ACTIONS.LOGIN:
      window.localStorage.setItem(
        'userData',
        JSON.stringify({
          userData: action.user,
        })
      );
      return;

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
