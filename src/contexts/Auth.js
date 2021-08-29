import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const SignIn = useCallback(async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      console.log('Login deu bom');
    } catch (err) {
      console.log('Erro no login');
    }
  }, []);

  const SignOut = useCallback(() => {
    localStorage.clear();
    setUser(null);
  }, []);

  const providerValue = useMemo(
    () => ({
      signed: !!user,
      user,
      setUser,
      SignIn,
      SignOut,
    }),
    [SignIn, SignOut, user]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
