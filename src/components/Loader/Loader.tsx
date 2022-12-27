export const Loader = () => (
  <div
    className="relative flex justify-center items-center w-full h-full"
    aria-label="carregando"
  >
    <div
      className="flex-none absolute border-4 border-grey-3 border-t-whiteFixed rounded-full h-4/5 aspect-square animate-spin"
      aria-hidden="true"
    />
  </div>
);
