import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import Facts from "./pages/Facts/Facts";
import NotFound from "./pages/NotFound/NotFound";
import Beans from "./pages/Beans/Beans";
import Recipes from "./pages/Recipes/Recipes";
import Combinations from "./pages/Combinations/Combinations";
import History from "./pages/History/History";
import BeanPage from "./pages/Bean/Bean";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Loader from "./components/Loader/Loader";
import Review from "./pages/Review/Review";
import Recipe from "./pages/Recipe/Recipe";

const router = createBrowserRouter([
  {
    path: "/JellyBelly",
    element: <Layout />,
    loader: Loader,
    children: [
      { index: true, element: <Home /> },
      { path: "facts", element: <Facts /> },
      { path: "bean/:id", element: <BeanPage /> },
      { path: "*", element: <NotFound /> },
      { path: "beans", element: <Beans /> },
      { path: "recipes", element: <Recipes /> },
      { path: "recipe/:id", element: <Recipe /> },
      { path: "combinations", element: <Combinations /> },
      { path: "history", element: <History /> },
      { path: "beanpage", element: <BeanPage /> },
      { path: "about", element: <About /> },
      { path: "review", element: <Review /> },
    ],
  },
]);

export default router;
