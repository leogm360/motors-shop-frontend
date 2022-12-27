import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Screen } from "@components";
import { PrivateRoute } from "./partials";
import { IContentRouterProp } from "./ContentRouterTypes";

export const ContentRouter = ({ routes }: IContentRouterProp) => {
  const handleMapRoutes = (routes: IRoute[]) =>
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
    });

  const memoizedRoutes = useMemo(() => handleMapRoutes(routes), [routes]);

  return (
    <Screen>
      <Routes>{memoizedRoutes}</Routes>
    </Screen>
  );
};
