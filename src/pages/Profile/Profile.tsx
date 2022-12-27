import { useData } from "@hooks";
import { Title, UserIcon, Badge, VehiclesList, Button } from "@components";

export const Profile = () => {
  const { user, product } = useData();

  const products = [product, product, product, product, product];

  return (
    <div className="relative before:absolute before:bg-brand-1 before:top-0 before:left-0 before:right-0 before:h-80">
      <section className="relative px-4 py-16">
        <div className="bg-grey-10 rounded px-7 py-10">
          <UserIcon user={user} size="big" />
          <div className="flex items-center mt-6 gap-x-4">
            <Title level={2} size="xl" weight="bold">
              {user.name}
            </Title>
            <Badge>Anunciante</Badge>
          </div>
          <p
            className="text-base leading-7 line-clamp-5 text-grey-2 mt-6"
            title={user.description}
          >
            {user.description}
          </p>
        </div>
      </section>
      <section className="flex flex-col mt-11 mb-32 gap-y-24">
        <div>
          <Title className="px-4" level={2} size="2xl" weight="semibold">
            Carros
          </Title>
          <VehiclesList
            className="mt-16"
            products={products}
            listType="products"
            showActive={true}
          />
        </div>
        <div>
          <Title className="px-4" level={2} size="2xl" weight="semibold">
            Motos
          </Title>
          <VehiclesList
            className="mt-16"
            products={products}
            listType="products"
            showActive={true}
          />
        </div>
      </section>
    </div>
  );
};
