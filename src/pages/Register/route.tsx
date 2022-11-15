import { Register } from "./Register";
import { EUserRoles } from "../../utils";

export const registerRoute: IRoute = {
  path: "/register",
  key: "register",
  element: <Register />,
  allowedRoles: [EUserRoles.advertiser, EUserRoles.buyer],
  autheticated: false,
};
