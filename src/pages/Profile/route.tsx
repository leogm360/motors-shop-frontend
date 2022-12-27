import { Profile } from "./Profile";
import { EUserRoles } from "@utils";

export const profileRoute: IRoute = {
  path: "/profile",
  key: "profile",
  element: <Profile />,
  allowedRoles: [EUserRoles.advertiser, EUserRoles.buyer],
  authenticated: false,
};
