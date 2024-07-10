import "./App.scss";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./components/Details/Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}>
        <Route path="/details" element={<Details />} />
      </Route>
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
