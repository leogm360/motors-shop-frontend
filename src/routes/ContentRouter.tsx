import { useCallback } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./partials";
import { Screen } from "../components";
import { IContentRouterProp } from "./ContentRouterTypes";

export const ContentRouter = ({ routes }: IContentRouterProp) => {
  const handleRoutes = useCallback(
    (routes: IRoute[]) =>
      routes.map(({ path, key, element, autheticated, allowedRoles }) => {
        // if (autheticated) {
        //   return <PrivateRoute key={key} />;
        // }

        return <Route key={key} path={path} element={element} />;
      }),
    []
  );

  return (
    <Screen>
      <BrowserRouter>
        <Routes>{handleRoutes(routes)}</Routes>
      </BrowserRouter>
    </Screen>
  );
};
