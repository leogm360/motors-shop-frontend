import { Login } from "./Login";
import { EUserRoles } from "@utils";

export const loginRoute: IRoute = {
  path: "/login",
  key: "login",
  element: <Login />,
  allowedRoles: [EUserRoles.advertiser, EUserRoles.buyer],
  authenticated: false,
};
