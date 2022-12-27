import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ContentRouter } from "@routes";
import { GlobalProvider, DataProvider } from "@providers";
import {
  homeRoute,
  loginRoute,
  registerRoute,
  productRoute,
  dashboardRoute,
  profileRoute,
} from "@pages";
import "react-toastify/dist/ReactToastify.min.css";
import "@styles/index.css";

const providers = [BrowserRouter, DataProvider];

const routes = [
  homeRoute,
  loginRoute,
  registerRoute,
  productRoute,
  dashboardRoute,
  profileRoute,
];

export const App = () => (
  <>
    <ToastContainer style={{ padding: "1rem" }} />
    <GlobalProvider providers={providers}>
      <ContentRouter routes={routes} />
    </GlobalProvider>
  </>
);
