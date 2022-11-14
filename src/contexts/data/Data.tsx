import { createContext, useMemo } from "react";
import { getRandomBackgroundColor } from "./utils";
import { IDataProviderProps, IDataContext } from "./DataTypes";

export const DataContext = createContext<IDataContext>({} as IDataContext);

export const DataProvider = ({ children }: IDataProviderProps) => {
  const color = useMemo(() => getRandomBackgroundColor(), []);

  const user: IUser = {
    name: "Leonardo Moraes",
    image: null,
    backgroundColor: color,
  };

  const product: IProduct = {
    image:
      "https://s2.glbimg.com/FL0to_5Q1N7QBH1Sklq5ave7lvI=/0x0:5000x3026/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/J/k/MW00kVQbSEFniYY8WJEw/grand-siena-gnv-002.jpg",
    gallery: [""],
    title: "Fiat Siena 2010 completo",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ullam quos praesentium minima? Commodi dicta numquam reprehenderit, dolores, suscipit aliquam quod consequatur assumenda dolorum voluptatibus porro blanditiis veritatis repudiandae deserunt!",
    mileage: 75000,
    year: 2010,
    price: 25378.75,
    expiresIn: "2022-11-08T15:33:59.999Z",
    isAuction: true,
    isActive: true,
  };

  const comment: IComment = {
    issuedAt: "2022-11-08T14:00:59.999Z",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit nobis tempora esse eos sit necessitatibus quaerat perferendis, ad in nulla facere maxime sint soluta quas veritatis repudiandae? A, labore.",
  };

  return (
    <DataContext.Provider value={{ user, product, comment }}>
      {children}
    </DataContext.Provider>
  );
};
