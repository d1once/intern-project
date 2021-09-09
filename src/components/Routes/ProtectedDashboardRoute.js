import { Route, Redirect } from "react-router-dom";

const isAuthenticated = localStorage.getItem("isAuthenticated");

const ProtectedDashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default ProtectedDashboardRoute;
