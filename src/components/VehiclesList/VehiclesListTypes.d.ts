export type TListType = "products" | "auctions";

export interface IVehicleListProps {
  className?: string;
  products: IProduct[];
  listType: TListType;
}
