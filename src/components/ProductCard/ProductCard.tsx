import { formatPriceToBRL, formatNumberToKilometer } from "@utils";
import { Title, Button, UserIcon, Badge } from "@components";
import { IProductCardProps } from "./ProductCardTypes";

export const ProductCard = ({
  user,
  product,
  showProductActive = false,
  showEditionActions = false,
}: IProductCardProps) => (
  <li className="flex-none list-none w-full max-w-2xs">
    <div className="relative bg-grey-7 border-2 border-grey-7 hover:border-brand-1 w-full mb-4 py-4 px-10 cursor-pointer transition-colors duration-300">
      {showProductActive && (
        <span
          className={`absolute top-3 left-4 inline-block text-sm text-whiteFixed ${
            product.isActive ? "bg-brand-1" : "bg-grey-4"
          } px-2 py-1`}
        >
          {product.isActive ? "Ativo" : "Inativo"}
        </span>
      )}
      <img className="rounded m-auto" src={product.image} alt={product.title} />
    </div>
    <Title
      className="truncate text-grey-1 mb-4"
      level={2}
      size="base"
      weight="semibold"
    >
      {product.title}
    </Title>
    <p className="text-sm line-clamp-2 text-grey-2 h-full max-h-10 mb-4">
      {product.description}
    </p>
    <div className="flex items-center mb-4 gap-2">
      <UserIcon user={user} size="small" />
      <span className="text-sm text-grey-2">{user.name}</span>
    </div>
    <div className="flex gap-3">
      <Badge formatter={formatNumberToKilometer}>{product.mileage}</Badge>
      <Badge>{product.year}</Badge>
      <span className="font-Lexend font-semibold text-grey-1 ml-auto">
        {formatPriceToBRL(product.price)}
      </span>
    </div>
    {showEditionActions && (
      <div className="flex mt-5 gap-4">
        <Button className="w-fit" variant="outline-heavy" size="medium">
          Editar
        </Button>
        <Button className="w-fit" variant="outline-heavy" size="medium">
          Ver como
        </Button>
      </div>
    )}
  </li>
);
