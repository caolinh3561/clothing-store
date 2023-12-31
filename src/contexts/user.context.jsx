import { createContext, useEffect, useState } from "react";
import { beforeAuthStateChangedTest } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  console.log("currentUser ", currentUser);

  useEffect(() => {
    const unsubscrible = beforeAuthStateChangedTest((user) => {
      setCurrentUser(user);
    })

    return unsubscrible;
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
