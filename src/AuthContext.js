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

  // const login = useCallback((uid, token, expirationDate) => {
  //   setToken(token);
  //   setUserId(uid);
  //   //genrate one houre from future
  //   const tokenExpirationDate =
  //     expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
  //   setTokenExpirationDate(tokenExpirationDate);
  //   window.localStorage.setItem(
  //     'userData',
  //     JSON.stringify({
  //       expiration: tokenExpirationDate.toISOString(),
  //       userId: uid,
  //       token,
  //     })
  //   );
  // }, []);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
