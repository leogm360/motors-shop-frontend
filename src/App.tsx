import { Screen, Comment } from "./components";
import { useData } from "./contexts";
import "./styles/index.css";

export const App = () => {
  const { comment } = useData();

  return (
    <Screen>
      <Comment comment={comment} />
    </Screen>
  );
};
