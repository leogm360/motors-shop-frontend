import { Route, useNavigate } from "react-router-dom";
import { IPrivateRouteProps } from "./PrivateRouteTypes";

export const PrivateRoute = ({
  roles,
  ...routeAttributes
}: IPrivateRouteProps) => {
  const navigate = useNavigate();

  if (true) {
    navigate("/");
  }

  return <Route {...routeAttributes} />;
};
