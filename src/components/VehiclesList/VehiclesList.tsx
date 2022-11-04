import { IVehicleListProps } from "./VehiclesListTypes";
import { ProductCard } from "../ProductCard";
import { AuctionCard } from "../AuctionCard";
import { useData } from "../../contexts";

export const VehiclesList = ({
  className = "",
  products,
  listType,
}: IVehicleListProps) => {
  const { user } = useData();

  return (
    <div className={`w-full ${className}`}>
      <ul className="flex px-4 lg:px-16 gap-3 lg:gap-12 overflow-scroll">
        {listType === "products" &&
          products.map((product) => (
            <ProductCard user={user} product={product} />
          ))}
        {listType === "auctions" &&
          products.map((product) => (
            <AuctionCard user={user} product={product} />
          ))}
      </ul>
    </div>
  );
};
