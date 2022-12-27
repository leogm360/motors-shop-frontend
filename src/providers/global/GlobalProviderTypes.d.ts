import { PropsWithChildren, JSXElementConstructor } from "react";

export type TProvider = JSXElementConstructor<PropsWithChildren<unknown>>;

export interface IGlobalProviderProps extends PropsWithChildren {
  providers: TProvider[];
}
