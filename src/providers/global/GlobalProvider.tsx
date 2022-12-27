import { useMemo } from "react";
import { TProvider, IGlobalProviderProps } from "./GlobalProviderTypes";

export const GlobalProvider = ({
  providers,
  children,
}: IGlobalProviderProps) => {
  const handleReduceProviders = (providers: TProvider[]) =>
    providers.reduce(
      (children, CurrentProvider) => (
        <CurrentProvider>{children}</CurrentProvider>
      ),
      children
    );

  const memoizedProviders = useMemo(
    () => handleReduceProviders(providers),
    [providers]
  );

  return <>{memoizedProviders}</>;
};
