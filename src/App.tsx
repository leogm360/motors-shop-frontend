import { ContentRouter } from "./routes";
import { homeRoute, loginRoute, registerRoute } from "./pages";
import "./styles/index.css";

const routes = [homeRoute, loginRoute, registerRoute];

export const App = () => <ContentRouter routes={routes} />;
