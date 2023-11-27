import { useContext } from "react";
import { mainContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(mainContext);
  if (loading) {
    return <p>Loading..............</p>;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};
PrivateRouter.propTypes = {
  children: PropTypes.node,
};
export default PrivateRouter;
