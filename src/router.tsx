import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Showacse from "./pages/showcase";
import Home from "./pages/home";
import Search from "./pages/search";
import Result from "./pages/result";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} >
      <Route index element={<Search />} />
      <Route path="result" element={<Result/>}/>
    </Route>
    <Route path="/showcase" element={<Showacse />} />
  </Route>
));
