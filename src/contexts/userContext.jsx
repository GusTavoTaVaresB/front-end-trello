import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const defaultUser = {
  nop: {
  },
  obs: "Nenhuma observação",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
