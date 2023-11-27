import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
export const mainContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser=(email,password)=>{
    setLoading(true)

    return signInWithEmailAndPassword(auth,email,password)
  }
  const logoutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    name: "nr pranto",
    createUser,
    signinUser,
    logoutUser,
    user,
    loading
  };

  return (
    <mainContext.Provider value={authInfo}>{children}</mainContext.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node,
};
export default AuthContext;
