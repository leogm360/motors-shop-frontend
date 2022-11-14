import { Home } from "./Home";
import { EUserRoles } from "../../utils";

export const homeRoute: IRoute = {
  path: "/",
  key: "home",
  element: <Home />,
  allowedRoles: [EUserRoles.advertiser, EUserRoles.buyer],
  autheticated: false,
};
