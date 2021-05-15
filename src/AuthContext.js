import React, {createContext, useCallback, useState} from 'react';

export const AuthContext = createContext();

function AuthProvider(props) {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((user, token = 'null', expirationDate) => {
    setToken(token);
    setUser(user);
    //genrate one houre from future
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    window.localStorage.setItem(
      'user',
      JSON.stringify({
        expiration: tokenExpirationDate.toISOString(),
        user,
        token,
      })
    );
  }, []);

  const logout = useCallback(() => {
    console.log('logout run');
    setToken(false);
    setUser(null);
    setTokenExpirationDate(null);
    localStorage.removeItem('user');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        login,
        logout,
        user,
        tokenExpirationDate,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
