import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserIdState] = useState(null);
  const [userName, setUserNameState] = useState('');

  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    const storedName = localStorage.getItem('userName');
    if (storedId) setUserIdState(storedId);
    if (storedName) setUserNameState(storedName);
  }, []);

  const setUserId = (id) => {
    localStorage.setItem('userId', id);
    setUserIdState(id);
  };

  const setUserName = (name) => {
    localStorage.setItem('userName', name);
    setUserNameState(name);
  };

  const logout = () => {
    localStorage.clear();
    setUserIdState(null);
    setUserNameState('');
  };

  return (
    <UserContext.Provider value={{ userId, setUserId, userName, setUserName, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
