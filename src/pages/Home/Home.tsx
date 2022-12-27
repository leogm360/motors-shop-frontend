import { HashLink } from "react-router-hash-link";
import { useData } from "@hooks";
import { Title, VehiclesList, Button } from "@components";

export const Home = () => {
  const { product } = useData();

  const list = [product, product, product, product, product];

  return (
    <>
      <section className="mb-[2.375rem] lg:mb-[6.25rem]">
        <div className="bg-brand-1 px-4 pt-[5rem] lg:pt-20 pb-28 lg:pb-40">
          <Title
            className="lg:text-[2.75rem] leading-10 lg:leading-[3.5rem] font-semibold text-center text-grey-10 lg:max-w-3xl mb-14 lg:mb-5 lg:mx-auto"
            level={2}
            size="3xl"
            weight="semibold"
          >
            Velocidade e experiência em um lugar feito para você
          </Title>
          <p className="leading-7 text-center text-grey-10 mb-14 lg:mb-12">
            Um ambiente feito para você explorar o seu melhor
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-center gap-5">
            <HashLink to="#auctions">
              <Button
                className="lg:w-48"
                type="button"
                variant="outline-light"
                size="medium"
              >
                Leilão
              </Button>
            </HashLink>
            <HashLink to="#cars">
              <Button
                className="lg:w-48"
                type="button"
                variant="outline-light"
                size="medium"
              >
                Carros
              </Button>
            </HashLink>
            <HashLink to="#motorcycles">
              <Button
                className="lg:w-48"
                type="button"
                variant="outline-light"
                size="medium"
              >
                Motos
              </Button>
            </HashLink>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mb-16 lg:mb-[12.5rem]">
          <Title
            id="auctions"
            className="px-4 lg:px-16 mb-16 lg:mb-10"
            level={2}
            size="2xl"
            weight="semibold"
          >
            Leilão
          </Title>
          <VehiclesList listType="auctions" products={list} />
        </div>
        <div className="mb-16 lg:mb-[12.5rem]">
          <Title
            id="cars"
            className="px-4 lg:px-16 mb-16 lg:mb-10"
            level={2}
            size="2xl"
            weight="semibold"
          >
            Carros
          </Title>
          <VehiclesList listType="products" products={list} />
        </div>
        <div>
          <Title
            id="motorcycles"
            className="px-4 lg:px-16 mb-16 lg:mb-10"
            level={2}
            size="2xl"
            weight="semibold"
          >
            Motos
          </Title>
          <VehiclesList listType="products" products={list} />
        </div>
      </section>
    </>
  );
};
