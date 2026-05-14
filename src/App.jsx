import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Atroop from "./pages/Atroop";
import Hamal from "./pages/Hamal";

const routerElement = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="atroop" element={<Atroop />} />
      <Route path="hamal" element={<Hamal />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={routerElement} />;
}
