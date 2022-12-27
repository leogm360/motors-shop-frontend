import { useMemo } from "react";
import { TProvider, IGlobalProviderProps } from "./GlobalProviderTypes";

export const GlobalProvider = ({
  providers,
  children,
}: IGlobalProviderProps) => {
  const providersReducer = (providers: TProvider[]) =>
    providers.reduce(
      (children, CurrentProvider) => (
        <CurrentProvider>{children}</CurrentProvider>
      ),
      children
    );

  const memoizedProviders = useMemo(
    () => providersReducer(providers),
    [providers]
  );

  return <>{memoizedProviders}</>;
};
