import { createContext, useState } from "react";

// Importing AuthContext from the server controllers
import AuthContext from '../../../server/controllers/auth.js';

const [token, setToken] = useState({});
const handletok = (item) => {
  setToken(item);
}

const authContextValue = {
  token,
  setToken: handletok,
};

export { AuthContext, authContextValue };

