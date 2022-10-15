import { UserIcon } from "./components";
import { useData } from "./contexts";
import "./styles/index.css";

export const App = () => {
  const { user } = useData();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <UserIcon user={user} size="big" />
    </div>
  );
};
