import { Product } from "./Product";
import { EUserRoles } from "@utils";

export const productRoute: IRoute = {
  path: "/product",
  key: "product",
  element: <Product />,
  allowedRoles: [EUserRoles.advertiser, EUserRoles.buyer],
  authenticated: false,
};
