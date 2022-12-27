import { Dashboard } from "./Dashboard";
import { EUserRoles } from "@utils";

export const dashboardRoute: IRoute = {
  path: "/dashboard",
  key: "dashboard",
  element: <Dashboard />,
  allowedRoles: [EUserRoles.advertiser, EUserRoles.buyer],
  authenticated: false,
};
