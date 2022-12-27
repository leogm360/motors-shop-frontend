import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { Screen } from "@components";
import { PrivateRoute } from "./partials";
import { IContentRouterProp } from "./ContentRouterTypes";

export const ContentRouter = ({ routes }: IContentRouterProp) => {
  const handleRoutes = useCallback(
    (routes: IRoute[]) =>
      routes.map(({ path, key, element, authenticated, allowedRoles }) => {
        // if (authenticated) {
        //   return (
        //     <PrivateRoute
        //       key={key}
        //       path={path}
        //       element={element}
        //       roles={allowedRoles}
        //     />
        //   );
        // }

        return <Route key={key} path={path} element={element} />;
      }),
    []
  );

  return (
    <Screen>
      <Routes>{handleRoutes(routes)}</Routes>
    </Screen>
  );
};
