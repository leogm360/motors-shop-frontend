import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Screen } from "../components";
import { homeRoute, loginRoute } from "../pages";

const routes = [homeRoute, loginRoute];

const handleRoutes = (routes: IRoute[]) =>
  routes.map(({ path, key, element, autheticated, allowedRoles }) => {
    // if (autheticated) {
    //   return <PrivateRoute key={key} />;
    // }

    return <Route key={key} path={path} element={element} />;
  });

export const ContentRouter = () => {
  return (
    <Screen>
      <BrowserRouter>
        <Routes>{handleRoutes(routes)}</Routes>
      </BrowserRouter>
    </Screen>
  );
};
