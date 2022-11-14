import { MutableRefObject, useEffect, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useData } from "../../contexts";
import { ProductCard } from "../ProductCard";
import { AuctionCard } from "../AuctionCard";
import { IVehicleListProps } from "./VehiclesListTypes";

export const VehiclesList = ({
  className = "",
  products,
  listType,
}: IVehicleListProps) => {
  const ref = useRef<HTMLUListElement>() as MutableRefObject<HTMLUListElement>;

  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
    decayRate: 0.96,
  });

  const { user } = useData();

  return (
    <div className={`w-full ${className}`}>
      <ul
        className="flex px-4 lg:px-16 gap-3 lg:gap-12 overflow-scroll scrollbar-hide cursor-grab"
        {...events}
        ref={ref}
      >
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
