import { useContext } from "react";
import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/FirebaseProvider";


const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading} = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-[calc(100vh-470px)] flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/sign-in" state={location?.pathname || "/"} />;
  }
  return (
    <div>
      {children}
    </div>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;