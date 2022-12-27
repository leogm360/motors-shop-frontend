import { MutableRefObject, useEffect, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useData } from "@hooks";
import { ProductCard, AuctionCard } from "@components";
import { IVehicleListProps } from "./VehiclesListTypes";

export const VehiclesList = ({
  products,
  listType = "auctions",
  showActions = false,
  showActive = false,
  className = "",
}: IVehicleListProps) => {
  const { user } = useData();

  const ref = useRef<HTMLUListElement | null>(null);

  const { events } = useDraggable(ref as MutableRefObject<HTMLUListElement>, {
    applyRubberBandEffect: true,
    decayRate: 0.96,
  });

  return (
    <div className={`w-full ${className}`}>
      <ul
        className="flex px-4 lg:px-16 gap-3 lg:gap-12 overflow-scroll scrollbar-hide cursor-grab"
        {...events}
        ref={ref}
      >
        {listType === "products" &&
          products.map((product) => (
            <ProductCard
              user={user}
              product={product}
              showProductActive={showActive}
              showEditionActions={showActions}
            />
          ))}
        {listType === "auctions" &&
          products.map((product) => (
            <AuctionCard
              user={user}
              product={product}
              showEditionActions={showActions}
            />
          ))}
      </ul>
    </div>
  );
};
