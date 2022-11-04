import { formatPriceToBRL } from "../../utils";
import { MileageBadge } from "../MileageBadge";
import { TimerBadge } from "../TimerBadge";
import { Title } from "../Title";
import { UserIcon } from "../UserIcon";
import { YearBadge } from "../YearBadge";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { IAuctionCardProps } from "./AuctionCardTypes";
import "./styles.css";

export const AuctionCard = ({
  user,
  product,
  showEditionActions = false,
}: IAuctionCardProps) => {
  const expiration = new Date(product.expiresIn);

  return (
    <li className="flex-none rounded list-none w-full max-w-xs lg:max-w-2.5xl auction-card">
      <div className="relative rounded-t h-96 lg:h-80">
        <img
          className="object-cover rounded-t w-full h-full"
          src={product.image}
          alt={product.title}
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col bg-gradient rounded-t px-9 py-6 z-0">
          <TimerBadge expiration={expiration} />
          <div className="mt-auto">
            <Title
              className="truncate text-whiteFixed mb-4"
              level={2}
              size="xl"
              weight="semibold"
              title={product.title}
            >
              {product.title}
            </Title>
            <p
              className="line-clamp-3 text-whiteFixed mb-5"
              title={product.description}
            >
              {product.description}
            </p>
            <div className="flex items-center mb-6 gap-4">
              <UserIcon user={user} size="small" />
              <span className="text-whiteFixed">{user.name}</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
              <div className="flex gap-3">
                <YearBadge year={product.year} />
                <MileageBadge mileage={product.mileage} />
              </div>
              <strong className="text-whiteFixed lg:ml-auto">
                {formatPriceToBRL(product.price)}
              </strong>
            </div>
          </div>
        </div>
      </div>
      {showEditionActions ? (
        <div className="text-base bg-brand-1 text-whiteFixed rounded-b w-full px-9 py-3">
          <Button className="w-fit" variant="outline-light" size="medium">
            Editar
          </Button>
          <Button className="w-fit ml-4" variant="outline-light" size="medium">
            Ver como
          </Button>
        </div>
      ) : (
        <button className="flex justify-between items-center text-base bg-brand text-whiteFixed rounded-b w-full px-9 py-6">
          <span className="font-semibold text-whiteFixed">
            Acessar página do leilão
          </span>
          <Icon name="arrowright" />
        </button>
      )}
    </li>
  );
};
