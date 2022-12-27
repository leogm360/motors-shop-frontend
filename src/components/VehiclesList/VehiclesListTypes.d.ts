export type TListType = "products" | "auctions";

export interface IVehicleListProps {
  products: IProduct[];
  listType?: TListType;
  showActions?: boolean;
  showActive?: boolean;
  className?: string;
}
