import React, {createContext, useCallback, useState} from 'react';

export const AuthContext = createContext();

function AuthProvider(props) {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((uid, token = 'null', expirationDate) => {
    setToken(token);
    setUserId(uid);
    //genrate one houre from future
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    window.localStorage.setItem(
      'userData',
      JSON.stringify({
        expiration: tokenExpirationDate.toISOString(),
        userId: uid,
        token,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(false);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem('userData');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        login,
        logout,
        userId,
        tokenExpirationDate,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
