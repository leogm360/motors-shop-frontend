import type { PathRouteProps } from "react-router-dom";
import { EUserRoles } from "@utils";

export interface IPrivateRouteProps extends PathRouteProps {
  roles: EUserRoles[];
}
