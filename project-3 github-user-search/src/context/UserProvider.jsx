import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  fetchUsers: async (userId) => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const BASE_URL = "https://api.github.com/users";

  const fetchUsers = async (userId) => {
    if (userId.trim() === "") return;

    try {
      const res = await fetch(`${BASE_URL}/${userId}`);
      const data = await res.json();

      setUser(data);
    } catch (error) {
      console.log(`Error fetching users: ${error}`);
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};
